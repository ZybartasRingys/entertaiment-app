import React from "react";

import { LoginFormContainer } from "../styles/LoginPage.styled";

import {
  Input,
  Form,
  SubmitButton,
  FormText,
  LoginLink,
} from "../styles/Register.styled";

function LoginForm() {
  return (
    <LoginFormContainer>
      <h1>Login</h1>
      <Form>
        <Input placeholder="Email address"></Input>
        <Input placeholder="Password"></Input>
        <SubmitButton>Login to your account</SubmitButton>
        <FormText>
          Don't have an account? <LoginLink> Sign Up</LoginLink>
        </FormText>
      </Form>
    </LoginFormContainer>
  );
}

export default LoginForm;
