import React from 'react'

/* Styled components */

import { LoginFormContainer } from '../styles/LoginPage.styled'
import {
  InputContainer,
  Input,
  Form,
  SubmitButton,
  FormText,
  LoginLink,
  ErrorMsgContainer,
  ValidField,
} from '../styles/Register.styled'

/* React hook form */

import { useForm } from 'react-hook-form'

/* Hooks */

import { useLogin } from '../../hooks/useLogin'

/* Context */

import { useStateContext } from '../../Context/StateContext'

function LoginForm() {
  const { login } = useLogin()
  const { errorMsg, setErrorMsg } = useStateContext()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  /* onSubmit function */

  const onSubmit = async (data) => {
    await login(data)
  }
  /* React toast function */

  return (
    <LoginFormContainer>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Input
            {...register('email', {
              required: "Can't be empty",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Wrong email',
              },
            })}
            placeholder='Email address'
            autoComplete='off'
          ></Input>
          <ErrorMsgContainer>{errors.email?.message}</ErrorMsgContainer>
        </InputContainer>
        <InputContainer>
          <Input
            {...register('password', { required: "Can't be empty" })}
            placeholder='Password'
            type='password'
            autoComplete='off'
          ></Input>
          <ErrorMsgContainer>{errors.password?.message}</ErrorMsgContainer>
        </InputContainer>

        {errorMsg ? <ValidField>{errorMsg}</ValidField> : null}

        <SubmitButton type='submit'>Login to your account</SubmitButton>
        <FormText>
          Don't have an account? <LoginLink to='/Register'> Sign Up</LoginLink>
        </FormText>
      </Form>
    </LoginFormContainer>
  )
}

export default LoginForm
