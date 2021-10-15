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
        bills: [{id:"0001"},{id:"0002"},{id:"0003"}],
    }

    async componentDidMount(){

    }

    render(){
        return(
            <div>
                <h1 id="Perfil">Facturas</h1>
                <hr className="center container w-75"/>
                <div className="center container w-100 p-8 py-2 my-3  mt-5">
                    <Row className="mb-5">
                        <div className="container">
                            <h2 id="h4Fuera2">Compras realizadas</h2>
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th id="BillsFormat">Número de factura</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.bills.map((bill =>
                                        <tr>
                                            <td> <a id="BillsFormat" href={"/Bill/"+bill.id}>{bill.id} </a></td>
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
