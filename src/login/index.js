import React, { Component } from "react";
import './login.css';
import {Form,FormGroup,Col,ControlLabel,FormControl,Button} from 'react-bootstrap';

class Login extends React.Component {
  render() {
    return (
    	<div className="login">
	    	<h1>Login to Trello</h1>
	    	<Form horizontal>
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
				      <Button type="submit" bsStyle="success" bsSize="large" block>Log in</Button>
				    </Col>
				  </FormGroup>
				</Form>
			</div>
		);

  }
}
export default Login;