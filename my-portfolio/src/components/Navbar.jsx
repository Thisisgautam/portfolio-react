import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect,useRef } from 'react';
import logo from '../assets/img/my-logo.svg';
import navicon1 from '../assets/img/icons8-linkedin.svg';
import navicon2 from '../assets/img/icons8-github.svg';
import navicon3 from '../assets/img/icons8-mail.svg';
import { Link } from 'react-scroll';
import { useScroll } from './ScrollContext';
import Hamburger from './Hamburger';

const Navbarr = () => {
  const [activelink, setactivelink] = useState('');
  const [click, setClick] = useState(false);
  const [scrolled, setscrolled] = useState(false);
 const { footerRef } = useScroll();
const handleScrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleClick=()=> setClick(!click);
  const closeMenu =()=> setClick(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setscrolled(true);
      }
      else {
        setscrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onupdateActivelink = (value) => {
    setactivelink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : "not-scrolled"} >
      <Container>
        <Navbar.Brand href="#home">
          <img id='main-logo' src={logo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
         <Hamburger/>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={click ? "navbar-link active":"navbar-link"}>
            <Link className={activelink === 'home' ? 'active navbar-link' : 'navbar-link'} to="home" spy={true} smooth={true} offset={-150} duration={100}  onClick={closeMenu} >Home</Link>
            <Link className={activelink === 'skills' ? 'active navbar-link' : 'navbar-link'} to="skills" spy={true} smooth={true} offset={-150} duration={100}  onClick={closeMenu} >Skills</Link>
            <Link className={activelink === 'projects' ? 'active navbar-link' : 'navbar-link'}  to="projects" spy={true} smooth={true} offset={-90} duration={100}  onClick={closeMenu} >Projects</Link>
            <Link className={activelink === 'contact' ? 'active navbar-link' : 'navbar-link'}  to="contact" spy={true} smooth={true} offset={-90} duration={100} onClick={closeMenu}  >Contact</Link>
            {/* <Link href="#projects" className={activelink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onupdateActivelink('projects')}>Projects</Link>
            {/* <Nav.Link href="#about" className={activelink === 'about'? 'active navbar-link': 'navbar-link'} onClick={()=> onupdateActivelink('about')}>About</Nav.Link> 
            <Link href="#contact" className={activelink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onupdateActivelink('contact')}>Contact</Link> */}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/goutam-goswami-921124229" target='_blank'><img src={navicon1} alt="" /></a>
              <a href="https://github.com/Thisisgautam" target='_blank'><img src={navicon2} alt="" /></a>
              <a href="#contact" ><img src={navicon3} alt="" /></a>
            </div>
            <button onClick={handleScrollToFooter} >
              <span>Lets Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbarr
