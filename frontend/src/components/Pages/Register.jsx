import React from "react";

import { RegisterContainer } from "../styles/Register.styled";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";

import RegisterForm from "../forms/RegisterForm";
function Register() {
  return (
    <RegisterContainer>
      <Link to="/">
        <Logo />
      </Link>
      <RegisterForm />
    </RegisterContainer>
  );
}

export default Register;
