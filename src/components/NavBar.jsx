import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/img/dtech.png';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand as="" to="/">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <span style={{ fontSize: 'larger', fontWeight: 'bold' }}>D2i Technology</span>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="/blogs" className={activeLink === 'blogs' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('blogs')}>Blogs</Nav.Link>
                        <Nav.Link href="/home#abouts" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('abouts')}>About Us</Nav.Link>
                        <Nav.Link href="/home#projects" className={activeLink === 'clients' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('clients')}>Our Clients</Nav.Link>
                        <Nav.Link href="/home#careers" className={activeLink === 'careers' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('careers')}>Careers</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <HashLink to='/home#connect'>
                            <button className="vvd"><span>Let’s Connect</span></button>
                        </HashLink>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
