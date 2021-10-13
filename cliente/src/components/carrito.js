import React, {Component} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import '../css/Style-login.css';
import axios from "axios";
import Cookies from "universal-cookie";
import img_default from "../img/default.png";

const cookies = new Cookies();


export default class Carrito extends Component{
    state = {
            products: [ {id:"0001",
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

    comprar(){
        // Guardar la factura en la base
        // Vaciar el carrito
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
        if(!cookies.get('username')){
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
                <h1 id="Tile_product" className="center container w-75">Carrito</h1>
                <hr className="center container w-75"/>
                <div className='container center container w-50 p-8 py-2 my-3 mt-5"'>
                    <Row className="mb-5">
                        {
                            this.state.products.map((product => (
                                <div className= "col-md-4 auth_holder mr-10 p-2" key={product.id}>
                                    <div  className="card" Style="width:300px">
                                        <a href={"/ProductInf/"+product.id} >
                                            <img className="card-img-top" src={img_default} alt="Card image"/>
                                            <div className="card-body ">
                                                <h4 className="card-title">{product.name}</h4>
                                            </div>
                                        </a>
                                        <div className="mb-3 m-sm-3" > <p className="card-text">{product.description}.</p>
                                            <div className="mb-3 m-sm-3" > <p className="card-text">{product.cost}.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )))
                        }
                    </Row>
                    <div>
                        <h4 id="h4Fuera">Total: {this.calcular()}</h4>
                    </div>
                    <div>
                        <Button className="bg-black"> Comprar </Button>
                    </div>
                </div>
            </div>
        )
    }
}


