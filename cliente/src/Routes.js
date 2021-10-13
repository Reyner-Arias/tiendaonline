import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Products from './components/products';
import Main from './components/main';
import MyProfile from './components/profile';
import Carrito from "./components/carrito";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/main" component ={Main}/>
                <Route exact path="/" component ={Main}/>
                <Route exact path="/Products" component ={Products}/>
                <Route exact path="/MyProfile" component ={MyProfile}/>
                <Route exact path="/Carrito" component ={Carrito}/>

            </Switch>
        </BrowserRouter>
    );
}
export default Routes;