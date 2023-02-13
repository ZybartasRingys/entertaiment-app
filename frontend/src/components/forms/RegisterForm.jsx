import React from "react";

/* Styled components */

import {
  RegisterFormContainer,
  Form,
  InputContainer,
  Input,
  SubmitButton,
  FormText,
  LoginLink,
  ErrorMsg,
} from "../styles/Register.styled";

/* React hook form */

import { useForm } from "react-hook-form";

import axios from "axios";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/user", data);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <RegisterFormContainer>
      <h1>Sign Up</h1>
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
            {...register("password", {
              required: "Can't be empty",
              minLength: {
                value: 8,
                message: "Pass to short",
              },
            })}
            placeholder="Password"
            type="password"
          ></Input>
          <ErrorMsg>{errors.password?.message}</ErrorMsg>
        </InputContainer>
        <InputContainer>
          <Input
            {...register("comfirmedPassword", {
              required: "Can't be empty",
              minLength: {
                value: 8,
                message: "Pass to short",
              },
            })}
            placeholder="Repeat Password"
            type="password"
          ></Input>

          {watch("pass") !== watch("comfirmedPass") && getValues("pass") ? (
            <ErrorMsg>Wrong pass</ErrorMsg>
          ) : (
            <ErrorMsg>{errors.comfirmedPassword?.message}</ErrorMsg>
          )}
        </InputContainer>

        <SubmitButton type="submit">Create an account</SubmitButton>
        <FormText>
          Already have an account? <LoginLink to="/Login">Login</LoginLink>
        </FormText>
      </Form>
    </RegisterFormContainer>
  );
}

export default RegisterForm;
