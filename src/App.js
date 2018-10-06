import React, {Component} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import Login from "./scenes/Login";
import AuthenticationContext from './contexts/AuthenticationContext';
import CE from 'cheapreats-node-sdk';
import FETCH_CUSTOMER_ACCOUNT from "./graphql/FETCH_CUSTOMER_ACCOUNT";
import Account from "./scenes/Account";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            authenticating: false,
            customer: null
        };
    }

    componentDidMount() {
        // Try to get authentication token
        let authToken = localStorage.getItem("auth-token");
        if(authToken) {
            this.setAuthenticationToken(authToken);
        } else {
            this.props.history.push("/login");
        }
    }

    setAuthenticationToken = (token) => {
        // Try to verify authentication token
        this.setState({authenticating: true});
        CE.setAuthenticationToken(token);
        CE.Graph.query(FETCH_CUSTOMER_ACCOUNT)
            .then(data => {
                if(data.the_customer) {
                    localStorage.setItem("auth-token", token);
                    this.setState({
                        customer: data.the_customer,
                        authenticating: false,
                        authenticated: true
                    });
                    this.props.history.push("/account");
                } else {
                    throw new Error("Invalid authentication token, please try again later.");
                }
            })
            .catch(e => {
                this.props.history.push("/login");
                this.setState({authenticating: false});
                console.error(e);
            })
    };

    revokeAuthenticationToken = () => {
        localStorage.setItem("auth-token", null);
        this.setState({
            authenticated: false,
            customer: null
        });
        this.props.history.push("/login");
    };


    render() {
        return (
            <AuthenticationContext.Provider value={{
                authenticated: this.state.authenticated,
                authenticating: this.state.authenticating,
                setAuthenticationToken: this.setAuthenticationToken,
                revokeAuthenticationToken: this.revokeAuthenticationToken,
                customer: this.state.customer
            }}>
                <div className="App">
                    <Switch>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/account" component={Account}/>
                    </Switch>
                </div>
            </AuthenticationContext.Provider>
        );
    }
}

export default withRouter(App);
