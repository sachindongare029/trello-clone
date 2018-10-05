import React, { Component } from "react";
import './login.css';
import axios from 'axios';
import {Form,FormGroup,Col,ControlLabel,FormControl,Button} from 'react-bootstrap';

class Login extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
    	email : '',
    	pass : ''
    };
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
    //console.log(this.state.email,"this.state.email");
  }

  handlePasswordChange = event => {
    this.setState({ pass: event.target.value });
    //console.log(this.state.pass,"this.state.pass");
  }

	handleSubmit = event => {
  	event.preventDefault();

  	const user = {
    	email: this.state.email,
    	password: this.state.pass
  	};
console.log(user)
  	axios.post(`http://localhost:3001/login`, { user })
   	 .then(res => {
   	 	console.log('?///////////////////////')
    	  console.log(res.data);
    	  console.log('/////////////')
    	  if(res.data.success == true){
    	  	alert('Successfully Login..');
    	  } else {
    	  	alert(res.data.message);
    	  }
    	})
	}
  render() {
    return (
    	<div className="login">
	    	<h1>Login to Trello</h1>
	    	<Form horizontal onSubmit={this.handleSubmit}>
				  <FormGroup controlId="formHorizontalEmail">
				    <Col componentClass={ControlLabel} sm={2}>
				      Email
				    </Col>
				    <Col sm={10}>
				      <FormControl type="email" placeholder="Email" onChange={this.handleEmailChange}/>
				    </Col>
				  </FormGroup>

				  <FormGroup controlId="formHorizontalPassword">
				    <Col componentClass={ControlLabel} sm={2}>
				      Password
				    </Col>
				    <Col sm={10}>
				      <FormControl type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
				    </Col>
				  </FormGroup>

				  <FormGroup>
				    <Col smOffset={2} sm={10}>
				      <Button type="submit" bsStyle="success" bsSize="large" block className="btn2">Log in</Button>
				    </Col>
				  </FormGroup>
				</Form>
			</div>
		);

  }
}
export default Login;