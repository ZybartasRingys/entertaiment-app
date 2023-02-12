import styled from "styled-components";

/* Search input Container */

export const SearchContainer = styled.form`
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    display: flex;
    padding-left: 15px;
    margin-top: 25px;
  }
`;

/* Search input  */

export const SearchInput = styled.input`
  outline: none;
  background-color: #10141e;
  border: none !important;
  color: #ffffff;
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  padding-left: 15px;
  caret-color: #fc4747;

  &:focus {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
  }
`;

/* Search icon Container */
