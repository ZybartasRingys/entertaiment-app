import React from "react";

import { LoginContainer } from "../styles/LoginPage.styled";
import LoginForm from "../forms/LoginForm";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <LoginContainer>
      <Link to="/">
        <Logo />
      </Link>

      <LoginForm />
    </LoginContainer>
  );
}

export default Login;
