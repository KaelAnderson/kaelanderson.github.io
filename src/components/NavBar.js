import { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../assets/img/LogoSVG.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import "../App.css";


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setscrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setscrolled(true);
            } else {
                setscrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/#home">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="/#home"
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('home')}
                        >
                            Home
                        </Nav.Link>


                        <Nav.Link
                            href="/#projects"
                            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('projects')}
                        >
                            Projects
                        </Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/kael-anderson6/" aria-label='Linkedin' rel='noopener' target='_blank'>
                                <img src={navIcon1} alt="" />
                            </a>

                            <a href="https://github.com/KaelAnderson" aria-label='GitHub' rel='noopener' target='_blank'>
                                <img src={navIcon2} alt="" />
                            </a>

                            
                        </div>
                        <a href="/Contact" aria-label='Contact' rel='noopener' target='_blank' >
                            <button className='vvd' onClick={() => console.log('connect')} >
                                <span>Let's Connect</span>
                            </button>
                        </a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
