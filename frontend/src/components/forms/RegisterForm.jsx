import React from 'react'

/* Styled components */

import {
  RegisterFormContainer,
  Form,
  InputContainer,
  Input,
  SubmitButton,
  FormText,
  LoginLink,
  ErrorMsgContainer,
  StyledToast,
  ValidField,
  HttpErrorMsg,
} from '../styles/Register.styled'

/* React hook form */

import { useForm } from 'react-hook-form'

/* React Toast */

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

/* Context */

import { useRegisterForm } from '../../hooks/useRegisterForm'
import { useStateContext } from '../../Context/StateContext'

function RegisterForm() {
  const { signup } = useRegisterForm()
  const { errorMsg, setErrorMsg } = useStateContext()

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      comfirmedPassword: '',
    },
  })

  /**
   * OnSubmit is an async function that takes in data, and then tries to post that data to the server.
   * If it succeeds, it logs the response data to the console. If it fails, it logs the error message
   * to the console.
   */
  const onSubmit = async (data) => {
    await signup(data)
  }

  const removeError = () => {
    setErrorMsg('')
  }

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
          <ErrorMsgContainer>{errors.email?.message}</ErrorMsgContainer>
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
          <ErrorMsgContainer>{errors.password?.message}</ErrorMsgContainer>
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
            <ErrorMsgContainer>Wrong pass</ErrorMsgContainer>
          ) : (
            <ErrorMsgContainer>
              {errors.comfirmedPassword?.message}
            </ErrorMsgContainer>
          )}
        </InputContainer>

        {!isValid ? <ValidField> All fields must be filled</ValidField> : null}

        {errorMsg.length ? <HttpErrorMsg>{errorMsg}</HttpErrorMsg> : null}

        <SubmitButton onClick={removeError} disabled={!isValid} type='submit'>
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
