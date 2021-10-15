import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Router from './Routes'
import NavbarComp from "./components/NavbarComp";
import Cookies from "universal-cookie";
const cookies = new Cookies()


ReactDOM.render(
  <React.StrictMode>
      <NavbarComp />
      <Router />
  </React.StrictMode>,
  document.getElementById('root')
);


