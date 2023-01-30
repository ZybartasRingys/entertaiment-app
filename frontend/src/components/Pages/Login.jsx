import React from "react";

import { LoginContainer } from "../styles/LoginPage.styled";
import LoginForm from "../forms/LoginForm";
import { ReactComponent as Logo } from "../../assets/logo.svg";

function Login() {
  return (
    <LoginContainer>
      <Logo />
      <LoginForm />
    </LoginContainer>
  );
}

export default Login;
