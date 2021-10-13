import React, { Component } from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from '../img/icono.png'
import { AiOutlineUser, AiOutlineShop,AiOutlineShoppingCart } from "react-icons/ai";
import { ImExit } from 'react-icons/im';
import Cookies from "universal-cookie";
const cookies = new Cookies();
export default class NavbarComp extends Component{
    cerrarSesion = () =>{
        cookies.remove('username',    {path: "/"});
        cookies.remove('password',    {path: "/"});
        cookies.remove('Name',        {path: "/"});
        cookies.remove('first_name',  {path: "/"});
        cookies.remove('second_name', {path: "/"});
        cookies.remove('email',       {path: "/"});
        window.location.href="/";
    }
    render() {
        return(
            <Navbar  bg="dark" variant="dark" sticky="top" expand="lg" collapseOnSelect>
                <Navbar.Brand className="container">
                    <a href="/main">
                        <img src={logo} className=" rounded-circle img-thumbnail" width="90" height="80" />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse style={{display: 'flex', justifyContent: 'right'}}>
                    {
                        //<Nav.Link href="">  Categorías </Nav.Link>
                           cookies.get('username') ?
                                <Nav>
                                    <Nav.Link href="/Products">
                                        <AiOutlineShop title="Comprar" size="50px"   color="white"/>
                                    </Nav.Link>
                                    <Nav.Link href="/Carrito">
                                        <AiOutlineShoppingCart onClick={""} title="ver carrito" size="50px"   color="white"/>
                                    </Nav.Link>
                                    <Nav.Link href="/Products">
                                        <AiOutlineUser onClick={""} title="ver perfil" size="50px"   color="white"/>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <ImExit onClick={()=>this.cerrarSesion()} title="Cerrar sesión" size="50px"   color="white"/>
                                    </Nav.Link>
                                </Nav>
                                :
                               <Nav>
                                   <AiOutlineShop onClick={()=>this.cerrarSesion()} title="Cerrar sesión" size="50px"   color="white"/>
                               </Nav>
                    }
                </Navbar.Collapse>
            </Navbar>
        )
    }
}