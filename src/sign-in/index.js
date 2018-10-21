import React from 'react';
import axios from 'axios';
import {
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap';
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: ''
    };
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ pass: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.pass
    };
    axios.post(`http://localhost:3001/login`, { user }).then(res => {
      if (res.data.success === true) {
        this.props.history.push(`/${res.data.username}/boards`);
      }
    });
  };
  render() {
    return (
      <div id="sign-in" className="container">
        <h1>Login to Trello</h1>
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl
                type="email"
                placeholder="Email"
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
                required
                onChange={this.handlePasswordChange}
              />
            </Col>
          </FormGroup>

          <FormGroup className="form-actions">
            <Col smOffset={2} sm={10}>
              <Button
                type="submit"
                bsStyle="success"
                bsSize="large"
                block
                className="btn2"
              >
                Log in
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
export default Login;
