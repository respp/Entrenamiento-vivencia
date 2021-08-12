import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../img/logo2.png';
import {Navbar, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap';

function Navv() {
    document.title="Nike";
    return(
      <div>
      <Navbar className="d-flex justify-content-around" style={{margin:0}}>
        <Nav.Item>
        <Navbar.Brand href="#home">
        <img src={img1} width="120" height="120" alt="..."></img>
        </Navbar.Brand>
        </Nav.Item>
  <div className="tamaños ">      
  <Navbar.Toggle aria-controls="navbarScroll" /> 
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0 "
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link className="item-menu mx-2" href="#action1">Home</Nav.Link>
      <Nav.Link className="item-menu mx-2" href="#action2">Nosotros</Nav.Link>
      <Nav.Link className="item-menu mx-2" href="#action2">Productos</Nav.Link>
      <Nav.Link className="item-menu mx-2" href="#action2">Contacto</Nav.Link>
    </Nav>
        
  </Navbar.Collapse>
  </div>
  
</Navbar>
</div>
      
       
       
       
       
       
        
    )
  } 

export default Navv;