import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Outlet } from 'react-router-dom';

export default function HeaderFooter() {

    return(

        <div className='body'>
            <div>
            <Navbar className='navy' expand='lg'>
                <Container className='nav-container'>
                    <NavLink className='nav-title' to='/'>Lupus Aware</NavLink>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' className='toggle'/>
                    <Navbar.Collapse id='basic-navbar-nav' className='nav-bar'>
                        <Nav className="me-auto navs">
                            <NavLink className='nav-link' to='/' >Home</NavLink>
                            <NavLink className='nav-link' to='/Blog' >Blog</NavLink>
                            <NavLink className='nav-link' to='Contact' >Resources</NavLink>
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