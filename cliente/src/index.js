import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Router from './Routes'
import NavbarComp from "./components/NavbarComp";
import Cookies from "universal-cookie";
const cookies = new Cookies()

cookies.set('username',     "poke12",           {path: "/"});
cookies.set('password',     "123456",           {path: "/"});
cookies.set('Name',         "Luis",             {path: "/"});
cookies.set('first_name',   "Rodríguez",        {path: "/"});
cookies.set('second_name',  "Quiros",           {path: "/"});
cookies.set('email',        "luisk37@gmail.com",{path: "/"});

ReactDOM.render(
  <React.StrictMode>
      <NavbarComp />
      <Router />
  </React.StrictMode>,
  document.getElementById('root')
);


