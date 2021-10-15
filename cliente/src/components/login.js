import React, {Component} from 'react';
import {Button, Form } from "react-bootstrap";
import Style from '../css/Style-login.css';
import axios from "axios";
import Cookies from "universal-cookie";
import swal from "sweetalert";

const cookies = new Cookies();

export default class login extends Component{
    state = {
        email: '',
        password: '',
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        if(cookies.get('email')){
            window.location.href="/";
        }
    }

    onSubmit  = async (e) => {
            cookies.set('first_name',    "Luis",             {path: "/"});
            cookies.set('last_name',     "Rodríguez",        {path: "/"});
            cookies.set('email',        "luisk37@gmail.com",{path: "/"});
            swal("Usuario encontrado","" ,"success").then((value) => {
                window.location.href="/principal"
            })
    }

    render(){
        return(
            <div>
                <h1  id="Perfil">Login</h1>
                <hr className="center container w-75"/>
                <div className="center container w-25 p-8 py-2 my-3  mt-5">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <div>
                            <Form.Group onChange= {this.handleChange}>
                                <br/>
                                <Form.Control type="text" placeholder="Email" name = 'email' />
                                <br/>
                                <Form.Control type="password" placeholder="Password" name = 'password' />
                                <br/>
                            </Form.Group>

                        </div>
                        <div className="abs-center p-8 py-2 my-3 mt-5">
                            <Button id="buttonComprar" size="lg"  href='/main' onClick={()=>this.onSubmit()}>
                                Iniciar sesión
                            </Button>
                        </div>
                    </Form.Group>
                </div >
            </div>
        )
    }
}
