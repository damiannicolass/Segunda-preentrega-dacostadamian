import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar expand="lg" className="p-1 color-navbar" fixed='top'>
            <Container>
                <Link to="/"><img src="/img/logo.png" alt="logo" className='logo' /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to="/categoria/stickers" className='link-navbar'>STICKERS</Link>
                        <Link to="/categoria/estampados" className='link-navbar'>ESTAMPADOS</Link>
                        <Link to="/categoria/papeleria" className='link-navbar'>PAPELERIA</Link>
                        <Link to="/categoria/cuadro" className='link-navbar'>CUADROS</Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    );
}

export default NavBar;
