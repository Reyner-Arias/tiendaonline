import React, {useState,Component} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import profile_img from "../img/profile_img.png";
import moment from "moment";
import axios from 'axios';
import swal from "sweetalert";
import reportWebVitals from "../reportWebVitals";
import Cookies from "universal-cookie";
import $ from "jquery";

const cookies = new Cookies();

function SamePass(){
    return (<div className="text-align: center">
                <h6 style={{ color: 'green' }}> correct! </h6>
            </div>
            )
}

function NotSamePass(){
    return (<div className="text-align: center">
                <h6 style={{ color: 'red' }}> The password is different</h6>
        </div>
    )
}

export default class sign extends Component{
    state = {
        passwordRepeat:'',
        username: '',
        first_name:'',
        last_name:'',
        email:'',
        password: '',
        birthday: new Date(),
        birthdayFormant: '',
        id_image: '0',
        role: 0,
        salt:'',
        // (username, first_name, last_name, email, password, birthday, id_image, role, salt)
    }

    onChange = birthday => {
        let y = birthday.getFullYear()
        let m = birthday.getMonth() + 1
        let d = birthday.getDate()
        console.log(d)
        let date = y+'-'+m+'-'+d
        this.setState({birthday: birthday });
        this.setState({birthdayFormant: date });
    }

    componentDidMount() {
        if(cookies.get('username')){
            window.location.href="/MyProfile";
        }
    }

    onSelect = role => {
        if(this.state.role === 0) {
            this.setState({role: 1});
        }else{
            this.setState({role: 0});
        }
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const values = {
            username: this.state.username,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            birthday: this.state.birthdayFormant,
            id_image: this.state.id_image,
            role: this.state.role,
            salt: this.state.salt,
        }
        axios.post('http://localhost:3001/api/user/insert',values).then((response)=>{
            if(!response.data){
                swal("Registro completo","" ,"success").then((value) => {
                    window.location.href="/";
                })
            }else{
                swal("Error al registrar","", "warning").then((value) => {
                });
            }
        });
        $.ajax({
            method: "POST",
            url: "http://localhost:3002/api/user/createNodeUser?username="+this.state.username,
        });
    };

    render(){
        return(
            <div>
                <h2>
                    <div id="fondo">
                        <h1>Sign-in</h1>
                    </div>
                </h2>
                {console.log(this.state)}

                <div className='container center container w-50 p-8 py-2 my-3 mt-5"'>
                    <Row className="mb-5">
                        <Col>
                            <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <div>
                                <Form.Group onChange= {this.handleChange}>
                                    <br/>
                                    <Form.Control type="text" placeholder="username" name = 'username' />
                                    <br/>
                                    <Form.Control type="text" placeholder="first_name" name = 'first_name' />
                                    <br/>
                                    <Form.Control type="text" placeholder="last_name" name = 'last_name' />
                                    <br/>
                                    <Form.Control type="text" placeholder="salt" name = 'salt' />
                                    <br/>
                                    <Form.Control type="text" placeholder="Email" name = 'email' />
                                    <br/>
                                    <Form.Control type="password" placeholder="Password" name = 'password' />
                                    <br/>
                                    <Form.Control type="password" placeholder="Confirm Password" name = 'passwordRepeat' onChange={this.onChangePass}/>
                                        {
                                            this.state.password === this.state.passwordRepeat && this.state.password !=="" ?
                                            <SamePass/> : this.state.password !==""  && this.state.passwordRepeat !=="" ? <NotSamePass/> : ""
                                        }
                                    <br/>
                                </Form.Group>

                            </div>
                            </Form.Group>
                            </Col>
                        <Col xs={5} md={4}>
                            <img src={profile_img} className="rounded mb-2" width="150" height="150" />
                            <div className="center ">
                                <Button className="mb-3"  variant="outline-success" type="submit" onClick = {this.onSubmit} >
                                    Add profile image
                                </Button>
                            </div>
                            <Form className= "mb-3">
                                <Form.Check>
                                    <Form.Check.Label> Register as a professor </Form.Check.Label>
                                    <Form.Check.Input name="role" onChange={this.onSelect} />
                                </Form.Check>
                            </Form>
                            <Form.Group as={Row} className="mb-3" controlId="birthday">
                                <Form.Label column sm="2">
                                    Birthday:
                                </Form.Label>
                                    <DatePicker selected={this.state.birthday}   showYearDropdown="{true}"   onChange={this.onChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        {
                            this.state.password === this.state.passwordRepeat &&
                            this.state.username !==""  && this.state.first_name !=="" && this.state.last_name !=="" &&
                            this.state.email !=="" && this.state.password !=="" && this.state.passwordRepeat !==""  ?
                                <Button type="button" className="btn btn-lg btn-block" variant="outline-success"
                                        type="submit" onClick = {this.onSubmit}>
                                    Register
                                </Button>
                                :
                                <Button type="button" className="btn btn-lg btn-block disabled" variant="outline-success"
                                        type="submit" onClick = {this.onSubmit}>
                                    Register
                                </Button>
                        }
                    </Row>

                </div >

                <footer id="footerAbsolute">
                    <div>TEC-digitalito</div>
                    <div>Versión 1.0 por Instituto Tecnológico de Costa Rica</div>
                    <div>Semestre II de 2021. Bases de datos 2</div>
                </footer>
            </div>
        )
    }
}
