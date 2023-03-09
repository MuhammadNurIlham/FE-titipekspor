import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Icon from '../../assets/images/titipekspor.png'
import Login from '../auth/Login';
import Register from '../auth/Register';

const NavigationBar = () => {

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="none" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={Icon}
                            width="200"
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link href="#deets" onClick={() => setShowLogin(true)}>Login</Nav.Link>
                            <Nav.Link href="#deets" onClick={() => setShowRegister(true)}>Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Login show={showLogin} setShow={setShowLogin} setShowRegister={setShowRegister} />
            <Register show={showRegister} setShow={setShowRegister} setShowLogin={setShowLogin} />
        </>
    )
}

export default NavigationBar;