import React, { Component } from 'react';
import AuthenticationContext from '../contexts/AuthenticationContext';
import CE from 'cheapreats-node-sdk';
import PageWrapper from "../components/PageWrapper";
import Heading1 from "../components/Heading1";
import Button from "../components/Button";
import AppStoreBadge from "../components/AppStoreBadges";
import styled from 'styled-components';
import {PRIMARY_FONT} from "../styles/fonts";

const AccountInfoItem = styled.div`
    font-family: ${PRIMARY_FONT};
    font-weight: bold;
    border-bottom: rgba(0,0,0,0.1) 1px solid;
    padding-top: 10px;
    padding-bottom: 10px;
`;


class Account extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <AuthenticationContext.Consumer>
                {authContext =>
                    <React.Fragment>
                        {!authContext.customer ?
                            <div>Authenticating...</div> :
                            <PageWrapper>
                                <img src={require('../resources/logo-white.png')} width={75} />
                                <Heading1>Account</Heading1>
                                <AccountInfoItem>Full Name: {authContext.customer.name}</AccountInfoItem>
                                <AccountInfoItem>Email Address: {authContext.customer.email_address}</AccountInfoItem>
                                <br/>
                                <Button onClick={authContext.revokeAuthenticationToken}>Logout</Button>
                                <AppStoreBadge/>
                            </PageWrapper>
                        }
                    </React.Fragment>
                }
            </AuthenticationContext.Consumer>
        );
    }
}

export default Account;
