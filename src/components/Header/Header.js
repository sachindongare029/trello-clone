import React from 'react';
import {Link } from 'react-router-dom'

function Header() {
  return (
  	<div>
	  	<header id="app-header">
	  		<Navbar inverse collapseOnSelect>
				  <Navbar.Header>
				    <Navbar.Brand>
				      <Image src="/thumbnail.png" responsive />
				    </Navbar.Brand>
				    <Navbar.Toggle />
				  </Navbar.Header>
				  <Navbar.Collapse>
				    <Nav>
				      <NavItem eventKey={1} href="#">
				        Link
				      </NavItem>
				      <NavItem eventKey={2} href="#">
				        Link
				      </NavItem>
				      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
				        <MenuItem eventKey={3.1}>Action</MenuItem>
				        <MenuItem eventKey={3.2}>Another action</MenuItem>
				        <MenuItem eventKey={3.3}>Something else here</MenuItem>
				        <MenuItem divider />
				        <MenuItem eventKey={3.3}>Separated link</MenuItem>
				      </NavDropdown>
				    </Nav>
				    <Nav pullRight>
				      <NavItem eventKey={1} href="#">
				        Link Right
				      </NavItem>
				      <NavItem eventKey={2} href="#">
				        Link Right
				      </NavItem>
				    </Nav>
				  </Navbar.Collapse>
				</Navbar>;
		  	
		        <Link to={`/`}>Home</Link>
		      
		        <Link to={`/register`} className="btn btn-primary">Sign Up</Link>
		      
		        <Link to={`/login`} className="btn btn-default">Log In</Link>
	  	</header>
  	</div>
  );
}
 export default Header;