import React from 'react';

const AuthenticationContext = React.createContext({
    authenticating: false,
    authenticated: false,
    customer: null
});

export default AuthenticationContext;
