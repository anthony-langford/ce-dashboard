import React, { Component } from 'react';
import AuthenticationContext from '../contexts/AuthenticationContext';
import CE from 'cheapreats-node-sdk';
import Heading1 from "../components/Heading1";
import PageWrapper from "../components/PageWrapper";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import AppStoreBadge from "../components/AppStoreBadges";


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      password: "",
      loggingin: false
    };
  }

  onTextChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLogin = (setAuthenticationToken) => {
    this.setState({ loggingin: true });
    CE.CustomerToken.create(this.state.emailAddress, this.state.password)
      .then(token => {
        setAuthenticationToken(token.body);
        this.setState({ loggingin: false });
      })
      .catch(e => {
        window.alert("Failed to login, please check your username as password.");
        this.setState({ loggingin: false });
      })
  };

  render() {
    return (
      <AuthenticationContext.Consumer>
        {authContext =>
          <React.Fragment>
            {authContext.authenticating || this.state.loggingin ?
              <div>Authenticating...</div> :
              <PageWrapper>
                <img src={require('../resources/logo-white.png')} width={75} alt="Logo" />
                <Heading1>Login</Heading1>
                <FormInput type="text" onChange={this.onTextChange} value={this.state.emailAddress} name="emailAddress" placeholder="Email Address" /><br />
                <FormInput type="password" onChange={this.onTextChange} value={this.state.password} name="password" placeholder="Password" /><br />
                <br />
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
