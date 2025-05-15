import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/my-logo.svg";
import navIcon1 from "../assets/img/icons8-linkedin.svg";
import navIcon2 from "../assets/img/icons8-github.svg";
import navIcon3 from "../assets/img/icons8-mail.svg";


 
 const Footer = () => {

   return (
     <div >
       <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/goutam-goswami-921124229" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Thisisgautam" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="#contact" ><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Made with &hearts; By Goutam Goswami</p>
          </Col>
        </Row>
      </Container>
    </footer>
     </div>
   )
 }
 
 export default Footer
 