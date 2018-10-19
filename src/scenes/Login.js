import React, { Component } from 'react';
import AuthenticationContext from '../contexts/AuthenticationContext';
import CE from 'cheapreats-node-sdk';
import Heading from '../components/Heading';
import PageWrapper from '../components/PageWrapper';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import AppStoreBadge from '../components/AppStoreBadges';


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      password: "",
      loggingIn: false
    };
  }

  onTextChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLogin = (setAuthenticationToken) => {
    this.setState({ loggingIn: true });
    CE.CustomerToken.create(this.state.emailAddress, this.state.password)
      .then(token => {
        setAuthenticationToken(token.body);
        this.setState({ loggingIn: false });
      })
      .catch(e => {
        window.alert("Failed to login, please check your username as password.");
        this.setState({ loggingIn: false });
      })
  };

  render() {
    return (
      <AuthenticationContext.Consumer>
        {authContext =>
          <React.Fragment>
            {authContext.authenticating || this.state.loggingIn ?
              <div>Authenticating...</div> :
              <PageWrapper>
                <img src={'logo-white.png'} width={75} alt="Logo" />
                <Heading>Login</Heading>
                <FormInput type="text" onChange={this.onTextChange} value={this.state.emailAddress} name="emailAddress" placeholder="Email Address" />
                <FormInput type="password" onChange={this.onTextChange} value={this.state.password} name="password" placeholder="Password" />
                <Button onClick={() => this.onLogin(authContext.setAuthenticationToken)}>Login</Button>
                <AppStoreBadge />
              </PageWrapper>
            }
          </React.Fragment>
        }
      </AuthenticationContext.Consumer>
    );
  }
}

export default Login;
