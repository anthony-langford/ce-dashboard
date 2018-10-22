import React, { Component } from 'react';
import AuthenticationContext from '../contexts/AuthenticationContext';
// import CE from 'cheapreats-node-sdk';
import Logo from '../components/Logo';
import PageWrapper from '../components/PageWrapper';
import Heading from '../components/Heading';
import Button from '../components/Button';
import AppStoreBadge from '../components/AppStoreBadges';
import styled from 'styled-components';
import { PRIMARY_FONT } from '../styles/fonts';

const AccountInfoItem = styled.div`
  font-family: ${PRIMARY_FONT};
  font-weight: bold;
  border-bottom: rgba(0,0,0,0.1) 1px solid;
  padding: 16px 0 16px;
`;

class Account extends Component {

  constructor(props) {
    super(props);
    
    this.state = {};
  }

  render() {
    return (
      <AuthenticationContext.Consumer>
        {authContext =>
          <React.Fragment>
            {!authContext.customer ?
              <div>Authenticating...</div> :
              <PageWrapper>
                <Logo src={'logo-white.png'} alt="Logo" />
                <Heading>Account</Heading>
                <AccountInfoItem>Full Name: {authContext.customer.name}</AccountInfoItem>
                <AccountInfoItem>Email Address: {authContext.customer.email_address}</AccountInfoItem>
                <Button onClick={authContext.revokeAuthenticationToken}>Logout</Button>
                <AppStoreBadge />
              </PageWrapper>
            }
          </React.Fragment>
        }
      </AuthenticationContext.Consumer>
    );
  }
}

export default Account;
