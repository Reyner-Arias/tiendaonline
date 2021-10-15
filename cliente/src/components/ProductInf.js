import React, {Component} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import img_default from "../img/default.png";
import Style from '../css/Style-login.css';
import Cookies from "universal-cookie";
import swal from "sweetalert";
import axios from "axios";
const cookies = new Cookies();


export default class profile extends Component{
    state = {products: []}



    async cargar(){
        const state = await axios.get("http://localhost:3001/api/getById/"+ this.props.match.params.id)
        //console.log(state.data)
        this.setState({products: state.data[0]})
        console.log(this.state)
    }

    componentDidMount(){
        if(!cookies.get('email')){
            window.location.href="/main";
        }
        this.cargar()

    }

    async onSubmit(){
        console.log(cookies.get('email'))
        const carrito = await axios.get("http://localhost:3001/api/getCartById/" + cookies.get('email'))
            .then(response=>{
                console.log(this.state)
                return response.data}
            )

        //const relation = await axios.get("http://localhost:3001/api/addToShoppingCart/ " + this.state.products.getRecord().field('@rid') +"/"+ carrito.data[0].getRecord().field('@rid') )
        swal("Producto agregado", "","success").then((value) => {
            window.location.href="/Products";
        })
    }

    render(){
        return(
            <div>
                <div className="center container w-100 p-8 py-2 my-3  mt-5">
                    <Row className="mb-5">
                        <Col xs={6} md={2}>
                            <img src={this.state.products.image}/>
                        </Col>
                        <Col xs={6}  md={2}>
                        </Col>
                        <Col xs={6} >
                            <Col><h4 id="h4Fuera2">Nombre del producto: {this.state.products.name}  </h4></Col>
                            <Col><h4 id="h4Fuera2">Descripción: {this.state.products.description}  </h4></Col>
                            <Col><h4 id="h4Fuera2">Precio: {this.state.products.cost}  </h4></Col>
                        </Col>

                    </Row>
                    <div className="abs-center p-8 py-2 my-3 mt-5">
                        <button id="buttonComprar" size="lg"  onClick = {this.onSubmit} >
                            Agregar al carrito
                        </button>
                    </div>
                </div >
            </div>

        )
    }
}
