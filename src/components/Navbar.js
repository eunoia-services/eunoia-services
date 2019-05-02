import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../css/Navbar.css'
// import {Link} from 'react-router-dom';

export default ()=>{
    return (
        <Navbar className='navbar' bg="primary" variant="dark" expand="lg" fixed='top'>
            <Navbar.Brand href="/">Eunoia Services</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                {/* <Nav.Link href="/">Home</Nav.Link> */}
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}