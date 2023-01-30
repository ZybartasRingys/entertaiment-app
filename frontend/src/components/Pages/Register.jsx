import React from "react";

import { RegisterContainer } from "../styles/Register.styled";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import RegisterForm from "../forms/RegisterForm";
function Register() {
  return (
    <RegisterContainer>
      <Logo />
      <RegisterForm />
    </RegisterContainer>
  );
}

export default Register;
