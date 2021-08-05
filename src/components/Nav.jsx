import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../img/logo2.png';
import {Navbar, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap';
function Navv() {
    document.title="Nike";
    return(
      <div className="centrar">
      <Navbar  expand="lg">
        <Nav.Item>
        <Navbar.Brand href="#home">
        <img src={img1} width="90" height="90" alt="..."></img>
        </Navbar.Brand>
        </Nav.Item>
  <div className="tamaños">      
  <Navbar.Toggle aria-controls="navbarScroll" /> 
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Zapatillas</Nav.Link>
      <Nav.Link href="#action2">Unite</Nav.Link>
      <NavDropdown title="Colecciones" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Nike Sportswear</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Running</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Fútbol</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Jordan</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Limited Edition</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Tiendas" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Nike Stores</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Nike Factory Stores</NavDropdown.Item>
      </NavDropdown>
     
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Buscar..."
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-info">🔍️</Button>
    </Form>    
  </Navbar.Collapse>
  </div>
  
</Navbar>
</div>
      
       
       
       
       
       
        
    )
  } 

export default Navv;