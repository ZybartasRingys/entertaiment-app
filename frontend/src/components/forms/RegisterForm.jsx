import React, { useState } from 'react'

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
  StyledToast,
} from '../styles/Register.styled'

/* React hook form */

import { useForm } from 'react-hook-form'

/* React toast */
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useRegisterForm } from '../../hooks/useRegisterForm'
import { useStateContext } from '../../Context/StateContext'

function RegisterForm() {
  const { signup } = useRegisterForm()
  const { errorMsg } = useStateContext()

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: { email: '', password: '', comfirmedPassword: '' },
  })

  /**
   * OnSubmit is an async function that takes in data, and then tries to post that data to the server.
   * If it succeeds, it logs the response data to the console. If it fails, it logs the error message
   * to the console.
   */
  const onSubmit = async (data) => {
    await signup(data)
  }

  const notify = () =>
    toast.success(
      `${errorMsg.length && errorMsg ? 'User Created' : errorMsg} `,
      {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      }
    )
  return (
    <RegisterFormContainer>
      <h1>Sign Up</h1>
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
          <ErrorMsg>{errors.email?.message}</ErrorMsg>
        </InputContainer>
        <InputContainer>
          <Input
            {...register('password', {
              required: "Can't be empty",
              minLength: {
                value: 8,
                message: 'Pass to short',
              },
            })}
            placeholder='Password'
            type='password'
          ></Input>
          <ErrorMsg>{errors.password?.message}</ErrorMsg>
        </InputContainer>
        <InputContainer>
          <Input
            {...register('comfirmedPassword', {
              required: "Can't be empty",
              minLength: {
                value: 8,
                message: 'Pass to short',
              },
            })}
            placeholder='Repeat Password'
            type='password'
          ></Input>

          {watch('password') !== watch('comfirmedPassword') &&
          getValues('password') ? (
            <ErrorMsg>Wrong pass</ErrorMsg>
          ) : (
            <ErrorMsg>{errors.comfirmedPassword?.message}</ErrorMsg>
          )}
        </InputContainer>

        <SubmitButton onClick={notify} type='submit'>
          Create an account
        </SubmitButton>
        <FormText>
          Already have an account? <LoginLink to='/Login'>Login</LoginLink>
        </FormText>

        <StyledToast />
      </Form>
    </RegisterFormContainer>
  )
}

export default RegisterForm
