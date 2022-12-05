import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Outlet } from 'react-router-dom';

export default function HeaderFooter() {

    return(
        <div className='body'>
            <div>
            <Navbar variant="light" className='navy'>
        <       Container className='nav-container'>
                    <Navbar.Brand className='nav-title' >Lupus Aware</Navbar.Brand>
                    <Nav className="me-auto nav-bar">
                        <NavLink className='nav-link' to='/' >Home</NavLink>
                        <NavLink className='nav-link' to='/Blog' >Blog</NavLink>
                        <NavLink className='nav-link' to='Contact' >Resources</NavLink>
                    </Nav>
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