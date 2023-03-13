import styled from "styled-components";

/* Search input Container */

export const SearchContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  /* Mobile */
  @media (max-width: 768px) {
    padding-left: 15px;
    margin-top: 25px;
  }
  /* Tablet */
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 90%;
    margin-left: 24px;
    margin-top: 37px;
    margin-bottom: 45px;
  }
`;

/* Search input  */

export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  background-color: #10141e;
  border: none !important;
  color: #ffffff;
  caret-color: var(--color-red);
  font-family: "Outfit";
  font-weight: 300;

  &:focus {
    text-decoration: underline;
  }
  /* Mobile */
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    padding-left: 15px;
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 24px;
    margin-left: 23px;
  }
`;

/* Search icon Container */
