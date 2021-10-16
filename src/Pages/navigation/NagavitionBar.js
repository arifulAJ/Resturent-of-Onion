
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

import nave from '../../image-folder/logo2.png'
const NagavitionBar = () => {
  return (
    <div className="container-fluid">
     <Navbar  expand="sm"   >
   
  <Container fluid >
    <div className="">
    <Navbar.Brand href="#home" className="">
      <img
        src={nave}
        width="230"
        height="50"
        
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    </div>
 
    <Nav className="justify-content-end "   activeKey="/home">
    <Nav.Item>
    <Nav.Link style={{color:"goldenrod"}} ><i class="fas fa-shopping-cart"></i></Nav.Link>
     
    </Nav.Item>
    <Nav.Item>
    <Nav.Link as={NavLink}  to='/home'><i class="fas fa-home">Home</i></Nav.Link>
     
    </Nav.Item>
    <Nav.Item>
    <Nav.Link as={NavLink} style={{width:'70px c',color:'black',fontWeight:'bolder'}} to="/login">Login</Nav.Link>
     
    </Nav.Item>
    <Nav.Item>
    <Nav.Link as={NavLink} style={{color:'white',fontWeight:'bolder'}} className="signup" to="/signup">sign up</Nav.Link>
     
    </Nav.Item>
   
  </Nav>
 
  </Container>
 
  </Navbar>
 
    </div>
  );
};

export default NagavitionBar;