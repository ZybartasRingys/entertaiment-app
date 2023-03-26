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

  /* Mobile */
  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 48px;
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    flex-direction: column;
    margin-top: 78px;
  }

  /* Desktop */
  @media (min-width: 1439px) {
    flex-direction: column;
    margin-top: 78px;
  }
`;

export const RegisterFormContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-semi-dark-blue);
  border-radius: 10px;
  display: flex;

  /* Mobile */
  @media (max-width: 768px) {
    max-width: 327px;
    max-height: 420px;
    padding-left: 24px;
    flex-direction: column;
    align-items: start;
    padding-top: 8px;
    margin-top: 58px;
  }

  h1 {
    font-size: 32px !important;
    font-weight: 300;
    margin-bottom: 24px;
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    max-width: 400px;
    max-height: 420px;
    margin-top: 72px;
    padding-left: 32px;
    padding-top: 38px;
    flex-direction: column;
    align-items: start;
  }

  /* Desktop */
  @media (min-width: 1439px) {
    max-width: 400px;
    max-height: 420px;
    margin-top: 88px;
    padding-left: 32px;
    padding-top: 38px;
    flex-direction: column;
    align-items: start;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  /* Mobile */
  @media (max-width: 768px) {
    max-width: 279px;
    max-height: 247px;
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    max-width: 336px;
  }

  /* Desktop */
  @media (min-width: 1439px) {
    max-width: 336px;
  }
`;

export const InputContainer = styled.div`
  border-bottom: 1px solid grey;
  border-color: var(--color-greyish-blue);

  &:focus-within {
    border-color: var(--color-white);
  }

  /* Mobile */
  @media (max-width: 768px) {
    width: 100%;
    height: 37px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
  }

  /* Tablet */

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 100%;
    height: 37px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
  }

  /* Desktop */
  @media (min-width: 1439px) {
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

  /* Mobile */
  @media (max-width: 768px) {
    width: 70%;
    height: 100%;
  }
`;

export const SubmitButton = styled.button`
  background-color: var(--color-red);
  color: var(--color-white);
  border-radius: 6px;
  cursor: pointer;
  border: none !important;

  &:hover {
    background-color: var(--color-white);
    color: #161d2f;
  }

  /* Mobile */
  @media (max-width: 768px) {
    width: 100%;
    height: 48px;
    margin-top: 18px;
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    width: 100%;
    height: 48px;
    margin-bottom: 24px;
  }

  /* Desktop */
  @media (min-width: 1439px) {
    width: 100%;
    height: 48px;
    margin-bottom: 24px;
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
  color: var(--color-red);

  /* Mobile */

  @media (max-width: 768px) {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    margin-left: 85px;
  }

  /* Tablet */
  @media (min-width: 1439px) {
    margin-left: 85px;
  }
`;

export const ValidField = styled.div`
  font-size: 12px;
  color: var(--color-red);

  /* Mobile */

  @media (max-width: 768px) {
    width: 50%;
    display: flex;
    padding-left: 16px;
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    margin-left: 85px;
  }

  /* Tablet */
  @media (min-width: 1439px) {
    margin-left: 85px;
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
