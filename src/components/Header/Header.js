import React from 'react';
import {Link } from 'react-router-dom';
import './header.css';
import { Navbar,Nav,Image,MenuItem} from 'react-bootstrap';

function Header() {
  return (
  	<div>
	  	<header id="app-header">
	  		<Navbar collapseOnSelect fixedTop className='nav-bar'>
				  <Navbar.Header>
				    <Navbar.Brand>
				      <Link to={`/`} className="homeMenu" ><Image src="/images/trello-logo-black.svg" responsive /></Link>
				    </Navbar.Brand>
				    <Navbar.Toggle />
				  </Navbar.Header>
				  <Navbar.Collapse>
				    <Nav pullRight>
			        <MenuItem eventKey={2}>
			        	<Link to={`/register`} className="btn btn-primary">Sign Up</Link>
			        </MenuItem>
			        <MenuItem eventKey={3}>
			        	<Link to={`/login`} className="btn btn-success">Log In</Link>
			        </MenuItem>
				    </Nav>
				  </Navbar.Collapse>
				</Navbar>
	  	</header>
  	</div>
  );
}
 export default Header;