import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Home = () => {
    const handleLogin = () => {
        console.log('Login button clicked');
        // Add your login logic here, such as opening a modal or redirecting
    };

    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary" >
                <div className="container" >
                    <Navbar.Brand href="#home">firstvite</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto d-flex justify-content-center align-items-center">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#Partner Universities">Partner Universities</Nav.Link>
                            <NavDropdown title="Online Programmes" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#Post Graduation/3.1">Post Graduation</NavDropdown.Item>
                                <NavDropdown.Item href="#Under Graduation/3.2">
                                    Under Graduation
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#Diploma/3.3">Diploma</NavDropdown.Item>
                                <NavDropdown.Item href="#Certification/3.4">
                                    Certification
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success" className="me-2">
                                Search
                            </Button>
                            <Button variant="primary" onClick={handleLogin}>
                                Login
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </header>
    );
};

export default Home;
