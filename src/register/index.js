import React from 'react';
import { TRELLO_API } from '../utils/constants';

import {
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap';
import axios from 'axios';
import './register.scss';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      pass: ''
    };
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
    //console.log(this.state.name,"this.state.name");
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
    //console.log(this.state.email,"this.state.email");
  };

  handlePasswordChange = event => {
    this.setState({ pass: event.target.value });
    //console.log(this.state.pass,"this.state.pass");
  };

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.pass
    };

    axios.post(`${TRELLO_API}/registration`, { user }).then(res => {
      if (res.data.success === true) {
        this.props.history.push('/login');
      }
    });
  };

  render() {
    return (
      <div id="sign-up" className="container">
        <h1>Sign up to Trello</h1>
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="formHorizontalName">
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={10}>
              <FormControl
                type="text"
                placeholder="Name"
                name="name"
                required
                onChange={this.handleNameChange}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl
                type="email"
                placeholder="Email"
                name="email"
                required
                onChange={this.handleEmailChange}
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl
                type="password"
                placeholder="Password"
                name="password"
                required
                onChange={this.handlePasswordChange}
              />
            </Col>
          </FormGroup>

          <FormGroup className="form-actions">
            <Col smOffset={2} sm={10}>
              <Button type="submit" bsSize="large" block bsStyle="success">
                Create New Account
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
export default Register;
