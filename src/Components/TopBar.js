import React from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function TopBar()
{
	return (
		<Navbar collapseOnSelect expand="lg" className="topBar-container sticky-top" variant="dark">
		  <Navbar.Brand href="/">Home</Navbar.Brand>
		  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
		  <Navbar.Collapse id="responsive-navbar-nav">

		    <Nav className="mr-auto">
			  <Nav.Link target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1ZaEcpfSZkDs4qDfWGv81GC36AKTcoLcD/view?usp=sharing">Resume</Nav.Link>

		      <NavDropdown title="My Projects" id="collasible-nav-dropdown">
		        <NavDropdown.Item href="/CPlusPlus">C++</NavDropdown.Item>
		        <NavDropdown.Item href="/CSharp">C#</NavDropdown.Item>
		        <NavDropdown.Item href="/Unreal">Unreal Engine IV</NavDropdown.Item>
		        <NavDropdown.Item href="/Unity">Unity</NavDropdown.Item>
		        <NavDropdown.Item href="/WebDevelopment">Web Development</NavDropdown.Item>
		      </NavDropdown>
		    </Nav>
		    <Nav>
		      <Nav.Link target="_blank" rel="noopener noreferrer" href="https://github.com/Tavera15"> <FontAwesomeIcon style={{color: 'white'}} icon={faGithub} size='2x' /> </Nav.Link>
		      <Nav.Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/joaquin-ramirez-5041901a2/"><FontAwesomeIcon style={{color: 'white'}} icon={faLinkedin} size='2x' /></Nav.Link> 
		    </Nav>
		  </Navbar.Collapse>
		</Navbar>
	)      
}

export default TopBar;