import styled, { createGlobalStyle } from "styled-components";

export const CardsContainer = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-top: 30px;
  }
`;
