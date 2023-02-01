import React from "react";
import { useForm } from "react-hook-form";

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

function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();
  return (
    <RegisterFormContainer>
      <h1>Sign Up</h1>
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
            {...register("pass", {
              required: "Can't be empty",
              minLength: {
                value: 8,
                message: "Pass to short",
              },
            })}
            placeholder="Password"
            type="password"
          ></Input>
          <ErrorMsg>{errors.pass?.message}</ErrorMsg>
        </InputContainer>
        <InputContainer>
          <Input
            {...register("comfirmedPass", {
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
            <ErrorMsg>{errors.comfirmedPass?.message}</ErrorMsg>
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
