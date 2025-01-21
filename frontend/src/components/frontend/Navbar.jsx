import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../assets/css/style.scss';
import Logo from '../../assets/images/Nav-Logo.png';


const Navbar = () => {
    const handleLogin = () => {
        console.log('Login button clicked');
        // Add your login logic here, such as opening a modal or redirecting
    };

    return (

        <Navbar expand="lg" className=" nav-color" >
            <div className="container" >
                <Navbar.Brand href="#home" className='logo'>
                    <img src={Logo} alt="Logo" style={{ height: '40px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto d-flex justify-content-center align-items-center">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#Alumuni">Alumuni</Nav.Link>
                        <Nav.Link href="#Reviews">Reviews</Nav.Link>
                        {/* <Nav.Link href="#For Business">For Business</Nav.Link> */}
                        <Nav.Link href="#Resourses">Resourses</Nav.Link>

                        <NavDropdown title="For Business" id="basic-nav-dropdown" className='For Business"'>
                            <NavDropdown.Item href="#Work with Us/3.2">Work with Us</NavDropdown.Item>
                            <NavDropdown.Item href="#Become a Partner/3.3">Become a Partner </NavDropdown.Item>
                            <NavDropdown.Item href="#Become a Trainer/3.4">Become a Trainer</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="All Courses" id="basic-nav-dropdown" className='nav-dropdown'>
                            <NavDropdown.Item href="#Generative AI/3.1">Generative AI</NavDropdown.Item>
                            <NavDropdown.Item href="#Data Science & Business Analytics/3.2">Data Science & Business Analytics</NavDropdown.Item>
                            <NavDropdown.Item href="#Project Management/3.3">Project Management</NavDropdown.Item>
                            <NavDropdown.Item href="#Cyber Security/3.4"> Cyber Security</NavDropdown.Item>
                            <NavDropdown.Item href="#Agile and Scrum/3.5"> Agile and Scrum</NavDropdown.Item>
                            <NavDropdown.Item href="#Digital Marketing/3.6"> Digital Marketing</NavDropdown.Item>
                            <NavDropdown.Item href="#Cloud Computing & DevOps/3.7"> Cloud Computing & DevOps</NavDropdown.Item>
                            <NavDropdown.Item href="#Business and Leadership/3.8"> Business and Leadership</NavDropdown.Item>
                            <NavDropdown.Item href="#Software Development/3.9"> Software Development</NavDropdown.Item>
                            <NavDropdown.Item href="#Product and Design/3.10"> Product and Design</NavDropdown.Item>
                            <NavDropdown.Item href="#IT Service and Architecture/3.11"> IT Service and Architecture</NavDropdown.Item>
                            <NavDropdown.Item href="#Quality Management/3.12">Quality Management </NavDropdown.Item>
                            <NavDropdown.Item href="#/3.13"> </NavDropdown.Item>

                        </NavDropdown>

                        <NavDropdown title="More" id="basic-nav-dropdown" className='More'>
                            <NavDropdown.Item href="#Corporate Trainning/3.1">Corporate Trainning</NavDropdown.Item>
                            {/* <NavDropdown.Item href="#Work with Us/3.2">Work with Us</NavDropdown.Item> */}
                            {/* <NavDropdown.Item href="#Become a Partner/3.3">Become a Partner</NavDropdown.Item> */}
                            {/* <NavDropdown.Item href="#Become a Trainer/3.4">Become a Trainer</NavDropdown.Item> */}
                            <NavDropdown.Item href="#Resume Help/3.5"> Resume Help</NavDropdown.Item>
                        </NavDropdown>


                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search Here ?"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success" className="me-2"> Search </Button>
                        <Button variant="primary" onClick={handleLogin}> Login </Button>
                    </Form>
                </Navbar.Collapse>
            </div>
        </Navbar>

    );
};

export default Navbar;
