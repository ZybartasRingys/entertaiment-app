import React from "react";

/* Styled components */

import { LoginFormContainer } from "../styles/LoginPage.styled";
import {
  InputContainer,
  Input,
  Form,
  SubmitButton,
  FormText,
  LoginLink,
  ErrorMsg,
} from "../styles/Register.styled";

/* React hook form */

import { useForm } from "react-hook-form";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <LoginFormContainer>
      <h1>Login</h1>
      <Form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <InputContainer>
          <Input
            {...register("email", {
              required: "Can't be empty",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Wrong email",
              },
            })}
            placeholder="Email address"
            autoComplete="off"
          ></Input>
          <ErrorMsg>{errors.email?.message}</ErrorMsg>
        </InputContainer>
        <InputContainer>
          <Input
            placeholder="Password"
            type="password"
            autoComplete="off"
          ></Input>
        </InputContainer>

        <SubmitButton>Login to your account</SubmitButton>
        <FormText>
          Don't have an account? <LoginLink to="/Register"> Sign Up</LoginLink>
        </FormText>
      </Form>
    </LoginFormContainer>
  );
}

export default LoginForm;
