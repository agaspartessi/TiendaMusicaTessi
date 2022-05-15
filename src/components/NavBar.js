import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';
import "./NavBar.css";


const NavBar = () =>{
        return(
            <div>
            <Navbar bg="light" expand="lg">

              <Navbar.Brand href="/">La Pentatonica Música</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto"> 
                  <Nav.Link href="/category/guitarra">Guitarras</Nav.Link>
                  <Nav.Link href="/category/bateria">Baterias</Nav.Link>
                  <Nav.Link href="/category/bajo">Bajos</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Nav.Link href="#cart">
                <CartWidget></CartWidget>
              </Nav.Link>
</Navbar>

            </div>
        
        );
        
}
export default NavBar ; 
/*
                  <Nav.Link href="/category/guitarras">Guitarras</Nav.Link>
                  <Nav.Link href="/category/baterias">Baterias</Nav.Link>
                  <Nav.Link href="/category/bajos">Bajos</Nav.Link>*/