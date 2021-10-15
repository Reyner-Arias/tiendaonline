import React, {Component} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import Style from '../css/Style-login.css';
import axios from "axios";
import Cookies from "universal-cookie";
import swal from "sweetalert";
import profile_img from "../img/profile_img.png";

const cookies = new Cookies();


export default class listEvaluation extends Component{
    state = {
        products:[
            {id:"0001",
                name:"Cepillo de dientes",
                description:"Economico y eficaz",
                cost:2500
            },
            {id:"0003",
                name:"Cepillo de jabon",
                description:"Economico y economico",
                cost:2500
            }
        ]

    }

    calcular = () => {
        let total = 0
        for(let i in this.state.products){
            total += this.state.products[i].cost
        }
        return total
    }
    async componentDidMount(){

    }

    render(){
        return(
            <div>
                <h1 id="Perfil">Desglose</h1>
                <hr className="center container w-75"/>
                <div className="center container w-100 p-8 py-2 my-3  mt-5">
                    <Row className="mb-5">
                        <div className="container">
                            <h2 id="h4Fuera2">Total: {this.calcular()}</h2>
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th id="BillsFormat">Id del producto</th>
                                    <th id="BillsFormat">Nombre</th>
                                    <th id="BillsFormat">Descripción</th>
                                    <th id="BillsFormat">Costo</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.products.map((product =>
                                        <tr>
                                            <td id="BillsFormat" > {product.id} </td>
                                            <td id="BillsFormat" > {product.name} </td>
                                            <td id="BillsFormat" > {product.description} </td>
                                            <td id="BillsFormat" > {product.cost} </td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </Row>
                </div >
            </div>

        )
    }
}
