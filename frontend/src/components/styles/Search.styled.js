import styled from 'styled-components'
import { ReactComponent as Search } from '../../assets/icon-search.svg'

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
  @media (min-width: 768px) and (max-width: 1439px) {
    width: 90%;
    margin-left: 24px;
    margin-top: 37px;
    margin-bottom: 45px;
  }

  /* Desktop */
  @media (min-width: 1439px) {
    margin-top: 36px;
    margin-left: 164px;
  }
`

/* Search input  */

export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  background-color: #10141e;
  border: none;
  color: var(--color-white);
  caret-color: var(--color-red);
  font-family: 'Outfit';
  font-weight: 300;

  &:focus {
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-thickness: 1px;
    color: var(--color-white);
    text-decoration-color: var(--color-greyish-blue);
  }
  /* Mobile */
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    padding-left: 15px;
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    font-size: 24px;
    margin-left: 23px;
  }

  /* Desktop */
  @media (min-width: 1439px) {
    margin-left: 24px;
    font-size: var(--font-size-heading-m);
  }
`

/* Search icon */

export const SearchIcon = styled(Search)`
  /* Mobile */
  @media (max-width: 768px) {
    transform: scale(0.8);
  }
`
