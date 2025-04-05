// // import React from 'react';
// // import Container from 'react-bootstrap/Container';
// // import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';
// // import { NavLink } from 'react-router-dom';
// // function NavigationBar() {
// //   return (
//     // <div className="navbar">
//     //   <div className="logo">dhanu</div>
//     //   <ul>
//     //     <li><NavLink to="/" aria-label="Home">Home</NavLink></li>
//     //     <li><NavLink to="/about" aria-label="About">About</NavLink></li>
//     //     <li><NavLink to="/skills" aria-label="Skills">Skills</NavLink></li>
//     //     <li><NavLink to="/projects" aria-label="Projects">Projects</NavLink></li>
//     //   <li> <NavLink to="/contacts" aria-label="Contacts"> Contact </NavLink></li>
//     //   </ul>
//     //   <button className="login-btn">Login</button>
//     // </div> 
// //     <Navbar bg="dark" data-bs-theme="dark">
// //         <Container>
// //           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
// //           <Nav className="me-auto">
// //             <NavLink to="/">Home</NavLink>
// //             <NavLink to="/about">About</NavLink>
// //             <NavLink to="/skills">Skills</NavLink>
// //             <NavLink to="/projects">Projects</NavLink>
// //             <NavLink to="/contacts">Contacts</NavLink>
// //           </Nav>
// //         </Container>
// //       </Navbar>
// //   );
// // }
// // export default NavigationBar;
// import React from "react";
// import { Link } from "react-scroll";  
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import logo from "./images/logo.png";
// import twitter from "./images/twitter.png";
// import instagram from "./images/instagramlogo.png";
// import linkedin from "./images/linkedinlogo.png";
// import update from "./images/output-onlinegiftools.gif";

// function NavigationBar() {
//   return (
//     <Navbar className="custom-navbar sticky-top" expand="lg" variant="dark">
//       <Container fluid> 
//         <Link to="home-section" smooth={true} duration={500}>
//           <img src={logo} className="Logo" alt="Logo" />
//         </Link>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Link to="home-section" smooth={true} duration={500} className="nav-link">
//               Home 
//             </Link>
//             <Link to="about-section" smooth={true} duration={500} className="nav-link">
//               About
//             </Link>
//             <Link to="skills-section" smooth={true} duration={500} className="nav-link">
//               Skills
//             </Link>
//             <Link to="projects-section" smooth={true} duration={500} className="nav-link">
//               Projects
//             </Link>
//             <Link to="contact-section" smooth={true} duration={500} className="nav-link">
//               Contact
//             </Link>
//           </Nav>
//           <div className="social-media-container">
//             <a href="https://www.linkedin.com/in/dhanushri17" target="_blank" rel="noopener noreferrer">
//               <img src={linkedin} className="socialmedialogos" alt="LinkedIn" />
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//               <img src={twitter} className="socialmedialogos" alt="Twitter" />
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//               <img src={instagram} className="socialmedialogos" alt="Instagram" />
//             </a>
//             <img src={update} className="update" alt="Update" />
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }
// export default NavigationBar;
import React from "react";
import { Link as ScrollLink } from "react-scroll"; // For scrolling navigation
import { Link } from "react-router-dom"; // For routing
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./images/logo.png";
import twitter from "./images/twitter.png";
import instagram from "./images/instagramlogo.png";
import linkedin from "./images/linkedinlogo.png";
import update from "./images/output-onlinegiftools.gif";

function NavigationBar() {
  return (
    <Navbar className="custom-navbar sticky-top" expand="lg" variant="dark">
      <Container fluid>
        <ScrollLink to="home-section" smooth={true} duration={500}>
          <img src={logo} className="Logo" alt="Logo" />
        </ScrollLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ScrollLink to="home-section" smooth={true} duration={500} className="nav-link">
              Home
            </ScrollLink>
            <ScrollLink to="about-section" smooth={true} duration={500} className="nav-link">
              About
            </ScrollLink>
            <ScrollLink to="journey-section" smooth={true} duration={500} className="nav-link">
              Journey
            </ScrollLink>
            <ScrollLink to="skills-section" smooth={true} duration={500} className="nav-link">
              Skills
            </ScrollLink>
            <ScrollLink to="projects-section" smooth={true} duration={500} className="nav-link">
              Projects
            </ScrollLink>
            <ScrollLink to="contact-section" smooth={true} duration={500} className="nav-link">
              Contact
            </ScrollLink>
          </Nav>
          <div className="social-media-container">
            <a
              href="https://www.linkedin.com/in/dhanushri17"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} className="socialmedialogos" alt="LinkedIn" />
            </a>
            <a
              href="https://x.com/dhanushriC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} className="socialmedialogos" alt="Twitter" />
            </a>
            <a
              href="https://www.instagram.com/dhanushrichandrasekar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} className="socialmedialogos" alt="Instagram" />
            </a>
            <Link to="/login">
              <img src={update} className="update" alt="Update" />
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
