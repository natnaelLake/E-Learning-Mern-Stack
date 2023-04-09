import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Container,NavDropdown,Form,Button,Image} from 'react-bootstrap'
import imageOne  from '../Assets/constimage.jpeg'
import  './style.css'
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { useFiles } from '../Admin/adminHooks/useFiles';


function Header() {
    const {logout} = useLogout()
    const {user} = useAuthContext();
    const [search,setSearch] = useState('');
    const {getCourseSearch}  = useFiles();
    const handleLogout = ()=>{
        logout()
    }
const handleSearch = async (searchName)=>{
    await getCourseSearch(searchName)
}
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
                    {user && (<Nav.Link href = '/' className = 'my-Navbars text-light'>Home</Nav.Link>)}
                    {user && (<Nav.Link href = '/mainCourse' className = 'my-Navbars text-light'>Courses</Nav.Link>)}
                   {user && ( <NavDropdown title = 'All Courses 'variant = 'light' id = 'collasible-nav-dropdown' className = 'my-Navbars'>
                   {user && user.user.role ==='admin' ? <Nav.Link href= '/dashboard' className = 'my-Navbars text-light'>DashBoard</Nav.Link>:null}
                        <NavDropdown.Item href= '/login' className = 'my-drops text-dark'>Login</NavDropdown.Item>
                        <NavDropdown.Item href= '/mainCourse' className = 'my-drops text-dark'>Courses</NavDropdown.Item>
                        <NavDropdown.Item href= '/'className = 'my-drops text-dark'>Home</NavDropdown.Item>
                        <NavDropdown.Item href= '/login' className = 'my-drops text-dark'>Login</NavDropdown.Item>
                    </NavDropdown>)}
                
                    
                </Nav>
                <Nav className='ml-auto'>
                {user && <span style={{padding:'20px',color:'white'}}>{user.email}</span>}
                <div style = {{paddingTop:'18px',paddingRight:'20px' ,paddingBottom:'5px'}}>
                        
                        {user && (<Button onClick={handleLogout} variant = 'outline-primary' >Log Out</Button>)}
                    </div>
                </Nav>
                <Nav className = 'ml-auto'>
                {!user && (<Button href = '/login' variant = 'outline-primary' className='text-light me-4'>login</Button>)}
                    
                    <Form className = 'd-flex'>
                        <Form.Control 
                            type = 'search'
                            placeholder = 'Search'
                            className = 'me-2'
                            aria-label = 'Search'
                            onChange = {e=>setSearch(e.target.value)}
                            
                            />
                        <Button variant = 'outline-dark' onClick = {()=> {handleSearch(search)}} className='text-light'>Search</Button>
                    </Form>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default Header