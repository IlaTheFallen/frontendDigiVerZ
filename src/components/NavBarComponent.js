import React from 'react';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import KaarLogo from './KaarLogo.png';

export default function NavBarComponent() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
            <Navbar.Brand className='ms-3'>
                <img src={KaarLogo} width="80"
                    height="50" alt=''>
                </img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-2">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link as={NavLink} to="/data-quality-report">Data Quality Report</Nav.Link>
                    <Nav.Link as={NavLink} to="/model-builder">Model Builder</Nav.Link>
                    <Nav.Link as={NavLink} to="/sales-forecast">Sales Forecast</Nav.Link>
                    <Nav.Link as={NavLink} to="/algorithm-analyzer">Algorithm Analyzer</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
