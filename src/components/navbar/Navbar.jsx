import React from 'react'
import logo from "../../assets/imgs/logo.jpg"
import "./NavBar.css"


function Navbar() {
  return (
        <nav className="container bg-dark d-flex text-white mt-1 h-2">
          <div className="containerLogo mt-1" >
            <a className=" navbar-brand d-flex align-items-baseline navbarLogo" href="#">
              <img className="logo" src={logo} alt="Logo"></img>
              <h1 className="titleLogo text-white my-3">DISTRIBUIDORA DROM</h1>
            </a>
          </div>
          <div className="container ">
            <ul className="list-unstyled d-flex justify-content-around navbar-bar my-3 w-75 m-auto">
              <li className="nav-item border-bottom"> <a className="text-decoration-none text-reset p-3" href="#">Nosotros</a></li>
              <li className="nav-item border-bottom"> <a className="text-decoration-none text-reset p-3" href="#">Productos</a></li>
              <li className="nav-item border-bottom"> <a className="text-decoration-none text-reset p-3" href="#">Ingresar</a> </li>
              <li className="nav-item border-bottom"> <a className="text-decoration-none text-reset p-3" href="#">Contacto</a> </li>
            </ul>
          </div>
        </nav>
      );
    };
    
    export default Navbar;
    
    