import styled from "styled-components";
import { ReactComponent as Search } from "../../assets/icon-search.svg";

/* Search input Container */

export const SearchContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .search-text {
    display: none;
    font-size: var(--font-size-heading-m);
  }

  &:focus-within .search-text {
    display: block;
  }

  /* Mobile */
  @media (max-width: 768px) {
    padding-left: 10px;
    margin-top: 5px;
  }
  /* Tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    width: 90%;
    margin-left: 24px;
    margin-top: 37px;
    margin-bottom: 35px;
  }

  /* Desktop */
  @media (min-width: 1439px) {
    margin-top: 36px;
    margin-left: 168px;
  }
`;
/* Input and text container Search   */

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

/* Search input  */

export const SearchInput = styled.input`
  width: 80%;
  outline: none;
  background-color: #10141e;
  border: none;
  color: var(--color-white);
  caret-color: var(--color-red);
  font-family: "Outfit";
  font-weight: 300;
  min-height: 64px;

  &:focus {
    border-bottom: 1px solid;
    border-color: var(--color-greyish-blue);
  }

  /* Mobile */
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    margin-left: 10px;
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    font-size: var(--font-size-heading-m);
    margin-left: 10px;
  }

  /* Desktop */
  @media (min-width: 1439px) {
    margin-left: 24px;
    font-size: var(--font-size-heading-m);
  }
`;

/* Search text for found items*/

export const SearchText = styled.p`
  margin-top: 15px;
  
  

  /* Mobile */
  @media (max-width: 768px) {
    font-size: 8px
    margin-left: 5px;
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    
  }

  /* Desktop */
  @media (min-width: 1439px) {
    font-size: var(--font-size-heading-l);
  }
`;

/* Search icon */

export const SearchIcon = styled(Search)`
  /* Mobile */
  @media (max-width: 768px) {
    transform: scale(0.8);
  }
`;

/* Found items error text */

export const NoFound = styled.p`
  color: #fc4747;
  width: 100%;
`;
