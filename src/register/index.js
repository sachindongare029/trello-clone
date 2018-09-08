import React, { Component } from "react";
import './register.css';
import {Form,FormGroup,Col,ControlLabel,FormControl,Button} from 'react-bootstrap';

class Register extends React.Component {
  render() {
    return (
    	<div className="register">
	    	<h1>Sign up to Trello</h1>
	    	<Form horizontal>
	    		<FormGroup controlId="formHorizontalName">
				    <Col componentClass={ControlLabel} sm={2}>
				      Name
				    </Col>
				    <Col sm={10}>
				      <FormControl type="text" placeholder="Name" />
				    </Col>
				  </FormGroup>
				  <FormGroup controlId="formHorizontalEmail">
				    <Col componentClass={ControlLabel} sm={2}>
				      Email
				    </Col>
				    <Col sm={10}>
				      <FormControl type="email" placeholder="Email" />
				    </Col>
				  </FormGroup>

				  <FormGroup controlId="formHorizontalPassword">
				    <Col componentClass={ControlLabel} sm={2}>
				      Password
				    </Col>
				    <Col sm={10}>
				      <FormControl type="password" placeholder="Password" />
				    </Col>
				  </FormGroup>

				  <FormGroup>
				    <Col smOffset={2} sm={10}>
				      <Button type="submit">Sign up</Button>
				    </Col>
				  </FormGroup>
				</Form>
			</div>
		);

  }
}
export default Register;