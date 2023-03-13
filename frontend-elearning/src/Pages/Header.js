import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Container,NavDropdown,Form,Button,Image} from 'react-bootstrap'
import imageOne  from '../constimage.jpeg'
import  './style.css'


function Header() {
  return (
    <div>
        <Navbar collapseOnSelect fixed='top' expand = 'lg' bg= 'success' className='main-nav' variant = 'dark'>
                <Navbar.Brand href = '/' className = 'me-auto'> 
                <Image 
                            src = {imageOne}
                            width='40'
                            height = '40'
                            roundedCircle
                            />
                            &nbsp;
                            E-Learning</Navbar.Brand>
                <Navbar.Toggle aria-controls = 'responsive-Navbar-nav'/>
                <Navbar.Collapse id= 'responsive-Navbar-nav'>
                <Nav className = 'm-auto'>
                    <Nav.Link href = '/' className = 'my-Navbars text-light'>Home</Nav.Link>
                    <Nav.Link href = '/courses'className = 'my-Navbars text-light'>Courses</Nav.Link>
                    <Nav.Link href = '/login'className = 'my-Navbars text-light'>Login</Nav.Link>
                    <NavDropdown title = 'All Courses 'variant = 'light' id = 'collasible-nav-dropdown' className = 'my-Navbars'>
                        <NavDropdown.Item href= '/login' className = 'my-drops text-dark'>Login</NavDropdown.Item>
                        <NavDropdown.Item href= '/courses' className = 'my-drops text-dark'>Courses</NavDropdown.Item>
                        <NavDropdown.Item href= '/'className = 'my-drops text-dark'>Home</NavDropdown.Item>
                        <NavDropdown.Item href= '/login' className = 'my-drops text-dark'>Login</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className = 'ml-auto'>
                    <Form className = 'd-flex'>
                        <Form.Control 
                            type = 'search'
                            placeholder = 'Search'
                            className = 'me-2'
                            aria-label = 'Search'
                            />
                        <Button variant = 'outline-dark' className='text-light'>Search</Button>
                    </Form>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default Header