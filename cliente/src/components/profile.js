import React, {Component} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import profile_img from '../img/profile_img.png';
import Style from '../css/Style-login.css';
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default class profile extends Component{
    componentDidMount() {
        if(!cookies.get('email')){
            window.location.href="/";
        }
    }

    render(){
        return(
            <div>
                <h1 id="Perfil">Mi Perfil</h1>
                <hr className="center container w-75"/>
                <div className="w-100 p-8 py-2 my-3  mt-5">
                    <Row className="mb-5">
                            <h2 id="h4Fuera2"> Nombre:  {cookies.get('first_name') + " " +cookies.get('last_name')} </h2>
                            <h2 id="h4Fuera2"> Email: {cookies.get('email') }</h2>
                    </Row>
                    <div className="abs-center p-8 py-2 my-3 mt-5">
                        <Button id="buttonComprar" size="lg"  href='/Bills' type="submit"  >
                            Ver compras realizadas
                        </Button>

                    </div>
                </div >
            </div>
        )
    }
}
