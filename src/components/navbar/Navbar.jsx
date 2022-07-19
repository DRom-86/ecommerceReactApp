import React from 'react'
import logo from "../../assets/imgs/logo.jpg"
import CartWidget from "../CartWidget/CartWidget.jsx"
import "./NavBar.css"


function NavBar() {
  return (
        <nav className="container bg-dark d-flex text-white align-items-center  mt-1">
          <div className="containerLogo mt-1 w-25" >
            <a className=" navbar-brand d-flex align-items-baseline navbarLogo" href="#">
              <img className="logo" src={logo} alt="Logo"></img>
              <h1 className="titleLogo text-white my-3">DISTRIBUIDORA DROM</h1>
            </a>
          </div>
          <div className="container">
            <ul className="list-unstyled d-flex justify-content-between navbar-bar w-50 m-auto">
              <li className="nav-item"> <a className="text-decoration-none text-reset" href="#">Productos</a></li>
              <li className="nav-item"> <a className="text-decoration-none text-reset" href="#">Nosotros</a></li>
              <li className="nav-item"> <a className="text-decoration-none text-reset" href="#">Ingresar</a> </li>
              <li className="nav-item"> <a className="text-decoration-none text-reset" href="#">Contacto</a> </li>
            </ul>
          </div>
          <CartWidget cant="0"/>          
        </nav>
      );
    };
    
    export default NavBar;
    
    