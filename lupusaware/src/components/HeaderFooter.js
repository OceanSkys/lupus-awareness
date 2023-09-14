import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

export default function HeaderFooter() {
 
    return(
        <div className='body'>
            <div>
                <Navbar collapseOnSelect className='navy' expand='lg'>
                    <Container className='nav-container'>
                        <Nav.Link className='nav-title' to='/'>Lupus Aware</Nav.Link>
                        <div className='nav-div'>
                        </div>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' className='toggle'/>
                        <Navbar.Collapse id='responsive-navbar-nav' className='nav-bar'>
                            <Nav className="me-auto navs">
                                <Nav.Link className='nav-link' eventKey="1" as={Link} to='/' >Home</Nav.Link>
                                <Nav.Link className='nav-link' eventKey="2" as={Link} to='/Blog' >Blog</Nav.Link>
                                <Nav.Link className='nav-link' eventKey="3"as={Link} to='/Resources' >Resources</Nav.Link>
                                <Nav.Link className='nav-link' eventKey="4"as={Link} to='/Contact' >Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>                
            </div>
            <div>
                <Outlet/>
            </div>
            <footer className='footer'>
            </footer>
        </div>
    );
};