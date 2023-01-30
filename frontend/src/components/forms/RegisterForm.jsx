import React from "react";

import {
  RegisterFormContainer,
  Form,
  Input,
  SubmitButton,
  FormText,
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
        <FormText>Already have an account? Login</FormText>
      </Form>
    </RegisterFormContainer>
  );
}

export default RegisterForm;
