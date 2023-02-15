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
/* Axios */
import axios from "axios";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:5000/user/login",
        data
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <LoginFormContainer>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
            {...register("password", { required: "Can't be empty" })}
            placeholder="Password"
            type="password"
            autoComplete="off"
          ></Input>
          <ErrorMsg>{errors.password?.message}</ErrorMsg>
        </InputContainer>

        <SubmitButton type="submit">Login to your account</SubmitButton>
        <FormText>
          Don't have an account? <LoginLink to="/Register"> Sign Up</LoginLink>
        </FormText>
      </Form>
    </LoginFormContainer>
  );
}

export default LoginForm;
