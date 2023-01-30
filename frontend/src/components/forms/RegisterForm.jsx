import React from "react";
import { Link } from "react-router-dom";

import {
  RegisterFormContainer,
  Form,
  Input,
  SubmitButton,
  FormText,
  LoginLink,
} from "../styles/Register.styled";

function RegisterForm() {
  return (
    <RegisterFormContainer>
      <h1>Sign Up</h1>
      <Form>
        <Input placeholder="Email address"></Input>
        <Input placeholder="Password"></Input>
        <Input placeholder="Repeat Password"></Input>
        <SubmitButton>Create an account</SubmitButton>
        <FormText>
          Already have an account? <LoginLink to="/Login">Login</LoginLink>
        </FormText>
      </Form>
    </RegisterFormContainer>
  );
}

export default RegisterForm;
