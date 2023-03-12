import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  color: var(--color-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #161d2f;

  /* Mobile */
  @media (max-width: 768px) {
    padding: 15px 15px;
    height: 56px;
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1440px) {
    height: 72px;
    padding: 25px 25px;
    max-width: 719px;
    border-radius: 10px;
  }
`;

export const Div = styled.div``;

export const IconsDiv = styled.div`
  display: flex;
  justify-content: space-between;

  /* Mobile */
  @media (max-width: 768px) {
    width: 45%;
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1440px) {
    width: 26%;
  }
`;

export const UserDiv = styled.button`
  border: 1px solid white;
  background-color: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: space-between;
`;

// navbar icons styles

/* Movie icon styling */
