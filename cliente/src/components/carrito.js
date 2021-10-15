import React, {Component} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
import img_default from "../img/default.png";
import swal from "sweetalert";
const cookies = new Cookies();


export default class Carrito extends Component{
    state = {
            products: [
                {id:"0001",
                    name:"Cepillo de dientes",
                    description:"Economico y eficaz",
                    cost:2500
                },
                {id:"0003",
                    name:"Cepillo de jabon",
                    description:"Economico y economico",
                    cost:2500
                },
                    ]
    }

    eliminarProducto(){

        swal("Producto eliminado", "","success").then((value) => {
            window.location.reload();
        })
    }

    onSubmit(){
        const id = "0001"
        swal(
            {
            title: "Compra realizada",
            icon: "success",
            button: "Gracias",
            }).then((value) => {
                window.location.href="/Bill/"+{id};
            })
    }

    comprar(){
        // Guardar la factura en la base
        // Vaciar el carrito
        // Pedimos la factura
        // mandar a una pagina de agradecimiento

    }

    calcular = () => {
        let total = 0
        for(let i in this.state.products){
            total += this.state.products[i].cost
        }
        return total
    }
    async componentDidMount(){
        if(!cookies.get('email')){
            window.location.href="/main";
        }
        /*const courses = await axios.get("http://localhost:3001/api/course/getNameEnrolledCourses",{ params:  {username: cookies.get('username')}})
        console.log(courses)
        this.setState({courses: courses.data})
        */
    }

    render(){
        return(
            <div id="bgColorPink"  >
                <h1 id="Tile_product" className="container w-75">Carrito</h1>
                <hr className="container w-75"/>
                <div className='container w-50 p-8 py-2 my-3 mt-5"'>
                    <Row className="mb-5">
                        {
                            this.state.products.map((product => (
                                <div className= "col-md-4 auth_holder mr-10 p-2" key={product.id}>
                                    <div  className="card" Style="width:300px">
                                            <img className="card-img-top" src={img_default} alt="Card image"/>
                                            <div className="card-body ">
                                                <h4 className="card-title">{product.name}</h4>
                                            </div>

                                        <div className="mb-3 m-sm-3" >
                                            <p className="card-text">{product.description}.</p>
                                        </div>

                                        <div className="mb-3 m-sm-3" >
                                            <p className="card-text">{product.cost}.</p>
                                        </div>
                                        <button id="buttonEliminar"  onClick = {this.eliminarProducto} >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            )))
                        }
                    </Row>
                    <div>
                        <h4 id="h4Fuera">Total: {this.calcular()}</h4>
                    </div>
                    <div className="abs-center p-8 py-2 my-3 mt-5">
                        {
                            console.log("prod"+this.state.products.length === 0),
                            this.state.products.length === 0 ?
                                <h4 id="h4Fuera"> ¡Agrega productos al carrito! </h4>
                            :
                            <button  className="btn-block disabled" id="buttonComprar" size="lg" onClick = {this.onSubmit} >
                            Comprar
                            </button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}


