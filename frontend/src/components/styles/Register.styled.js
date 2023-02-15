import styled from "styled-components";
import { Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";

export const RegisterContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: start;
  align-items: center;
  font-family: "Outfit", sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 48px;
  }
`;

export const RegisterFormContainer = styled.div`
  background-color: #161d2f;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    max-width: 327px;
    max-height: 420px;
    padding-left: 24px;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-top: 8px;
    margin-top: 74px;
  }

  h1 {
    font-size: 32px !important;
    font-weight: 300;
    margin-bottom: 24px;
  }
`;

export const Form = styled.form`
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    max-width: 279px;
    max-height: 247px;
  }
`;

export const InputContainer = styled.div`
  border-bottom: 1px solid grey;
  @media (max-width: 768px) {
    width: 100%;
    height: 37px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
  }
`;
export const Input = styled.input`
  background-color: #161d2f;
  border: none;
  padding-left: 16px;
  color: #ffffff;
  caret-color: #fc4747;
  &:focus {
    outline: none !important;
  }
  @media (max-width: 768px) {
    width: 70%;
    height: 100%;
  }
`;

export const SubmitButton = styled.button`
  background-color: #fc4747;
  color: #ffffff;
  border-radius: 6px;
  cursor: pointer;
  border: none !important;

  &:hover {
    background-color: #ffffff;
    color: #161d2f;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 48px;
    margin-top: 18px;
  }
`;

export const FormText = styled.p`
  text-align: center;
  font-size: 15px;
  font-family: Outfit;

  @media (max-width: 768px) {
    margin-top: 33px;
  }
`;

export const LoginLink = styled(Link)`
  text-decoration: none;
  color: #fc4747;
  font-size: 15px;
  font-weight: 300;
`;

/* Register form styling */

export const ErrorMsg = styled.p`
  font-size: 11px;
  color: #fc4747;

  @media (max-width: 768px) {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledToast = styled(ToastContainer)`
  .Toastify__toast-body {
    color: #fc4747;
  }
  .Toastify__progress-bar {
    background-color: #fc4747;
  }
`;
