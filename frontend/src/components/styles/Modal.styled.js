import styled from 'styled-components'
import Modal from 'styled-react-modal'
import { Link } from 'react-router-dom'
import { SubmitButton } from './Register.styled'

export const StyledModal = Modal.styled`
  width: 150px;
  height: 100px;
  background-color: transperant;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  position: absolute;
  top: 50px;
  right: 0px;
  

  

   /* Mobile */
  @media (max-width: 768px) {
    
  }

  /* Tablet */

  @media (min-width: 768px) and (max-width: 1439px) {
    right: 10px;
    top: 99px;
  }

  /* Desktop  */

  @media (min-width: 1440px) {
   left:10px;
   top: 550px;
  }
`

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
    margin-top: 12px;
    padding: 3px;
  }

  /* Tablet */

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 90%;
    margin-top: 14px;
    padding: 4px;
  }

  /* Desktop  */

  @media (min-width: 1440px) {
    width: 90%;
    margin-top: 14px;
    padding: 6px;
  }
`
