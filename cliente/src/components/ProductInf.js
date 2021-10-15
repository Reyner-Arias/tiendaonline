import React, {Component} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import img_default from "../img/default.png";
import Style from '../css/Style-login.css';
import Cookies from "universal-cookie";
import swal from "sweetalert";
const cookies = new Cookies();


export default class profile extends Component{
    state = {
        name: '',
        Email: '',
        birth:'',
        picture:null,
    }

    onSubmit(){
        swal("Producto agregado", "","success").then((value) => {
            window.location.href="/Products";
        })
    }

    componentDidMount() {
        if(!cookies.get('email')){
            window.location.href="/";
        }
    }

    render(){
        return(
            <div>
                <div className="center container w-100 p-8 py-2 my-3  mt-5">
                    <Row className="mb-5">
                        <Col xs={6} md={2}>
                            <img src={img_default} className="rounded mb-2" width="400" height="400" />
                        </Col>
                        <Col xs={6}  md={2}>
                        </Col>
                        <Col xs={6} >
                            <Col><h4 id="h4Fuera2">Nombre del producto: {this.props.match.params.name }  </h4></Col>
                            <Col><h4 id="h4Fuera2">Descripción: {this.props.match.params.description }  </h4></Col>
                            <Col><h4 id="h4Fuera2">Precio: {this.props.match.params.cost }  </h4></Col>
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
