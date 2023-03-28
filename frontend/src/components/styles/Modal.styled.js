import styled from "styled-components";
import Modal from "styled-react-modal";
import { Link } from "react-router-dom";
import { SubmitButton } from "./Register.styled";

export const StyledModal = Modal.styled`
  width: 100%;
  height: 100px;
  max-width: 160px;
  background-color: transperant;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  position: absolute;
  top: 50px;
  
 
  
  

  

   /* Mobile */
  @media (max-width: 768px) {
    
    align-items: end;
     right: 5px;
  }

  /* Tablet */

  @media (min-width: 768px) and (max-width: 1439px) {
    right: 10px;
    top: 98px;
    padding-right: 5px;
  }

  /* Desktop  */

  @media (min-width: 1440px) {
   left:4px;
   top: 550px;
  }
`;

export const StyledModalLink = styled(Link)`
  background-color: var(--color-red);
  color: var(--color-white);
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  /* Mobile */

  @media (max-width: 768px) {
    width: 60%;
    margin-top: 13px;
    padding: 3px;
  }

  /* Tablet */

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 90%;
    margin-top: 14px;
    padding: 6px;
  }

  /* Desktop  */

  @media (min-width: 1440px) {
    width: 90%;
    margin-top: 14px;
    padding: 7px;
  }
`;

export const LogoutBtn = styled.button`
  background-color: var(--color-red);
  border: none;
  border-radius: 6px;
  color: var(--color-white);
  width: 80%;
  /* Mobile */
  @media (max-width: 768px) {
    padding: 3px;
    margin-top: 5px;
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    padding: 5px;
    margin-top: 10px;
  }

  /* Desktop */
  @media (min-width: 1439px) {
    padding: 7px;
    margin-top: 10px;
  }
`;
