import React from 'react';
import styled from 'styled-components';

// Import components
import Button from './Button';
import FormInput from './FormInput';

const Form = styled.form``;

const LoginForm = ({
  authContext,
  onTextChange,
  emailAddress,
  password,
  onLogin
}) => {
  return (
    <Form>
      <FormInput type="text" onChange={onTextChange} value={emailAddress} name="emailAddress" placeholder="Email Address" />
      <FormInput type="password" onChange={onTextChange} value={password} name="password" placeholder="Password" />
      <Button onClick={event => onLogin(event, authContext.setAuthenticationToken)} type="submit">Login</Button>
    </Form>
  );
};

export default LoginForm;