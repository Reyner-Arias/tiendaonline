import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Products from './components/products';
import Main from './components/main';
import MyProfile from './components/profile';
import Carrito from "./components/carrito";
import ProductInf from "./components/ProductInf";
import Bills from "./components/bills";
import Bill from "./components/bill";
import Login from "./components/login";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/main" component ={Main}/>
                <Route exact path="/" component ={Main}/>
                <Route exact path="/Products" component ={Products}/>
                <Route exact path="/MyProfile" component ={MyProfile}/>
                <Route exact path="/Carrito" component ={Carrito}/>
                <Route exact path="/ProductInf/:id" component ={ProductInf}/>
                <Route exact path="/Bills" component ={Bills}/>
                <Route exact path="/Bill/:id" component ={Bill}/>
                <Route exact path="/Login" component ={Login}/>

            </Switch>
        </BrowserRouter>
    );
}
export default Routes;