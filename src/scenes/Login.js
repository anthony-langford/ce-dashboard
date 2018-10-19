import React, { Component } from 'react';
import AuthenticationContext from '../contexts/AuthenticationContext';
import CE from 'cheapreats-node-sdk';
import Logo from '../components/Logo';
import Heading from '../components/Heading';
import PageWrapper from '../components/PageWrapper';
import LoginForm from '../components/LoginForm';
import AppStoreBadge from '../components/AppStoreBadges';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      emailAddress: "",
      password: "",
      loggingIn: false
    };

    this.onLogin = this.onLogin.bind(this);
  }

  onTextChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLogin = (event, setAuthenticationToken) => {
    event.preventDefault();
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
                <Logo src={'logo-white.png'} alt="Logo" />
                <Heading>Login</Heading>
                <LoginForm authContext={authContext} onTextChange={this.onTextChange} emailAddress={this.state.emailAddress} password={this.state.password} onLogin={this.onLogin} />
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
