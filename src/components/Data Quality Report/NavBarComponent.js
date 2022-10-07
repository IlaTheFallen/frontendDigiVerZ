import React from 'react';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import KaarLogo from '../KaarLogo.png';

export default function NavBarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
            <Navbar.Brand as={NavLink} to="/home" className='ms-3'>
                <img src={KaarLogo} width="80"
                    height="50" alt=''>
                </img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-2">
                    <Nav.Link as={NavLink} to="upload">Upload</Nav.Link>
                    <Nav.Link as={NavLink} to="report">Report</Nav.Link>
                    <Nav.Link as={NavLink} to="history">History</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
  )
}
