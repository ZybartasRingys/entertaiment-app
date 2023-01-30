import styled from "styled-components";

export const RegisterContainer = styled.section`
  width: 100%;
  height: 80vh;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const RegisterFormContainer = styled.div`
  background-color: #161d2f;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    max-width: 327px;
    max-height: 365px;
    padding-left: 24px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }
`;

export const Form = styled.form`
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    max-width: 279px;
    max-height: 247px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const Input = styled.input`
  background-color: #161d2f;
  border: none;
  @media (max-width: 768px) {
    width: 100%;
    height: 37px;
  }
`;

export const SubmitButton = styled.button`
  background-color: #fc4747;
  color: #ffffff;
  border-radius: 6px;
  @media (max-width: 768px) {
    width: 100%;
    height: 48px;
  }
`;

export const FormText = styled.p`
  text-align: center;
  font-size: 15px;
  font-family: Outfit;
`;
