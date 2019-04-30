import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../css/Navbar.css'

export default ()=>{
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Eunoia Services</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#home">About</Nav.Link>
                <Nav.Link href="#home">Contact Us</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}