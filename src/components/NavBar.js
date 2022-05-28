import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';
import "./NavBar.css";
import { Link } from "react-router-dom";


const NavBar = () =>{
        return(
            <div>
            <Navbar bg="light" expand="lg">

              <Navbar.Brand>La Pentatonica Música</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto"> 
                  <Link to={"/"} style={{margin: '1rem',textDecoration:'none', color:'gray'}}>Inicio</Link>
                  <Link to={"/category/guitarra"} style={{margin: '1rem',textDecoration:'none', color:'gray'}}>Guitarras</Link>
                  <Link to={"/category/bateria"} style={{margin: '1rem',textDecoration:'none', color:'gray'}}>Bateria</Link>         
                  <Link to={"/category/bajo"} style={{margin: '1rem',textDecoration:'none', color:'gray'}}>Bajo</Link> 
                </Nav>
              </Navbar.Collapse>
                <CartWidget></CartWidget>
</Navbar>

            </div>
        
        );
        
}
export default NavBar ; 
