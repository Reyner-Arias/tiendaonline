const express = require('express');
const app = express();
var cors = require('cors');
const bodyParser = require('body-parser')

app.listen(3001, () => console.log("Running on port 3001...."));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());



const OrientDBClient = require("orientjs").OrientDBClient;
let sessionOrient;

OrientDBClient.connect({
    host: "localhost",
    port: 2424
}).then(client => {
    client.session({ name: "TiendaOnline", username: "root", password: "prueba1" })
        .then(session => {
            sessionOrient = session;
        });
}).then(()=> {

});

app.get('/api/getAllProducts', (req, res) => {
    sessionOrient.query("SELECT * FROM PRODUCTS")
        .all()
        .then((results)=> {
            res.send(results);
        });
});

app.get('/api/getById/:id', (req, res) => {
    const id = req.params.id;
    sessionOrient.query("SELECT * FROM PRODUCTS WHERE id = :id", {params: { id: id}})
        .all()
        .then((results)=> {
            res.send(results);
        });
});

app.get('/api/getCartById/:id', (req, res) => {
    const id = req.params.id;
    sessionOrient.query("SELECT * FROM SHOPPING_CAR WHERE id = :id", {params: { id: id}})
        .all()
        .then((results)=> {
            res.send(results);
        });
});


app.post('/api/newUser/:first_name/:last_name/:email/:password', function(req, res) {
    const first_name = req.params.first_name;
    const last_name = req.params.last_name;
    const email = req.params.email;
    const password = req.params.password;

    console.log(first_name, last_name, email, password)
    sessionOrient.insert().into("USERS")
        .set({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password
        })
        .one()
        .then((attractions) => {
            console.log(attractions);
            res.send(attractions);
        });
});

app.post('/api/newShoppingCart/:email', function(req, res) {
    const email = req.params.email;

    sessionOrient.insert().into("SHOPPING_CAR")
        .set({
            id: email,
        })
        .one()
        .then((cart) => {
            console.log(cart);
            res.send(cart);
        });
});

app.post('/api/newRelation/:riduser/:ridcart', function(req, res) {
    const riduser = req.params.riduser;
    const ridcart = req.params.ridcart;

    console.log(riduser, ridcart)

    sessionOrient.query("create edge BELONGS FROM :ridcart TO :riduser", {params: { ridcart: ridcart, riduser:riduser}})
        .then((result) => {
            console.log(result);
        });
});


app.get('/api/user/login/:email/:password', (req,res) => {
    const email = req.params.email;
    const password = req.params.password;
    sessionOrient.query("SELECT FROM USERS where email = :email and password = :password", {params: { email: email, password:password}})
        .on("data", data => {
            console.log(data);
            res.send(data);
        })
        .on('error',(err)=> {
            console.log(err);
        })
        .on("end", () => {
            console.log("End of the stream");
        });
})
app.get('/api/getBillProduct/:id', (req,res) => {
    const id = req.params.id;

    sessionOrient.query("select expand(out) from (traverse in_HAVE from (select * from BILLS where @rid=:id)) where @class='HAVE'", {params: { id:id }})
        .all()
        .then((results)=> {
            res.send(results);
        });
})

app.get('/api/getBillShoppingCar/:id', (req,res) => {
    const id = req.params.id;

    sessionOrient.query("select expand(out) from (traverse in_HAVE from (select * from SHOPPING_CAR where id=:id)) where @class='HAVE'", {params: { id:id }})
        .all()
        .then((results)=> {
            res.send(results);
        });
})


app.post('/api/addToShoppingCart/:product_rid/:cart_rid', function(req, res) {
    const product_rid = req.params.product_rid;
    const cart_rid = req.params.cart_rid;


    sessionOrient.query("create edge HAVE FROM :product_rid TO :cart_rid", {params: { product_rid: product_rid, cart_rid:cart_rid}})
        .then((result) => {
            console.log(result);
        });
});

app.post('/api/buying/:cart_rid/:bill_rid', function(req, res) {
    const bill_rid = req.params.bill_rid;
    const cart_rid = req.params.cart_rid;

    sessionOrient.query("UPDATE EDGE HAVE SET in = :bill_rid WHERE in = :cart:rid", {params: { bill_rid: bill_rid, cart_rid:cart_rid}})
        .then((result) => {
            console.log(result);
        });
});


app.post('/api/deleteToShoppingCart/:product_rid/:cart_rid', function(req, res) {
    const product_rid = req.params.product_rid;
    const cart_rid = req.params.cart_rid;


    sessionOrient.query("delete edge HAVE FROM :product_rid TO :cart_rid", {params: { product_rid: product_rid, cart_rid:cart_rid}})
        .then((result) => {
            console.log(result);
        });
});



app.post('/api/createRelation/:riduser/:ridbill', function(req, res) {
    const riduser = req.params.riduser;
    const ridbill = req.params.ridbill;

    console.log(riduser, ridbill)

    sessionOrient.query("create edge BELONGS FROM :ridbill TO :riduser", {params: { ridbill: ridbill, riduser:riduser}})
        .then((result) => {
            console.log(result);
        });
});