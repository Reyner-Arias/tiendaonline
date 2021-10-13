import React, {Component} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import profile_img from '../img/profile_img.png';
import Style from '../css/Style-login.css';
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default class profile extends Component{
    state = {
        name: '',
        Email: '',
        birth:'',
        picture:null,
    }

    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="/";
        }
    }

    render(){
        return(
            <div>
                {console.log(this.state) }

                <h1 className="center mt-3">My Profile</h1>
                <hr className="center container w-75"/>

                <div className="center container w-100 p-8 py-2 my-3  mt-5">
                    <Row className="mb-5">
                        <Col xs={6} md={2}>
                            <img src={profile_img} className="rounded mb-2" width="200" height="200" />
                            <Row>
                                <Button className="mb-3" size="lg" variant="outline-success" type="submit" onClick = {this.onSubmit} >
                                    Add profile image
                                </Button>
                            </Row>

                        </Col>
                        <Col xs={6}  md={2}>
                        </Col>
                        <Col xs={6} >
                            <Col><h2>Name: {cookies.get('first_name') + " " +cookies.get('last_name')  } </h2></Col>
                            <Col><h2>Email: {cookies.get('email') }</h2></Col>
                            <Col><h2>Birthday: {cookies.get('birthday') }</h2></Col>
                        </Col>

                    </Row>
                    <Row className="mb-5">
                        <Button className="mb-3" size="lg" href='/MyProfile/EditUser' variant="outline-success" type="submit">
                            Edit Profile
                        </Button>
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
