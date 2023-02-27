import styled from "styled-components";
import Modal from "styled-react-modal";
import { Link } from "react-router-dom";

export const StyledModal = Modal.styled`
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #161d2f;

  @media (max-width: 768px) {
   flex-direction: column;
  }
`;

export const StyledModalLink = styled(Link)`
  background-color: #fc4747;
  color: #ffffff;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  @media (max-width: 768px) {
    width: 50%;
    height: 48px;
    margin-top: 18px;
  }
`;
