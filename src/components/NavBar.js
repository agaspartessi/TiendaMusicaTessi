import React, { Component } from 'react';
import { Navbar,Nav,NavDropdown,Form ,FormControl,Button } from 'react-bootstrap';

export default class NavBar extends Component {
    render(){
        return(
            <div>
            <Navbar bg="light" expand="lg">

    <Navbar.Brand href="#home">La Pentatonica Música</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#inicio">Inicio</Nav.Link>
        <Nav.Link href="#ubicacion">¿Dónde estamos?</Nav.Link>
        <NavDropdown title="Instrumentos" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Guitarras</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Pianos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Baterias</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Ofertas</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>

</Navbar>
            </div>
        
        )
        
    }
}