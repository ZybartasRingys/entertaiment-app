import styled from 'styled-components'
import { ReactComponent as BookEmpty } from '../../assets/icon-bookmark-empty.svg'
/* Trending Section */

export const TrendingSection = styled.section`
  background-color: #10141e;
  width: 100%;
  height: 100%;
  display: flex;
  padding-left: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 15px;

    h1 {
      font-family: 'Outfit', sans-serif;
      font-size: 20px;
      font-weight: 300;
    }
  }
`

/* Trending Card Container */
export const CardContainer = styled.div`
  border-radius: 8px;
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 240px;
    height: 140px;
    flex-direction: column;
    justify-content: space-between;
  }

  h2 {
    font-size: 15px;
    color: #ffffff;
  }
`

/* Trending IconContainer */
export const IconContainer = styled.div`
  @media (max-width: 768px) {
    width: 96%;
    display: flex;
    justify-content: end;
    align-items: center;
    margin-top: 8px;
  }
`
/* Trending card bookmark Icon div*/
export const IconDiv = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #10141e;
  opacity: 0.5;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #ffffff;
    opacity: 1;
  }
`

/* Trending card  text container*/
export const TextContainer = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    padding-left: 16px;
    margin-bottom: 16px;

    h2 {
      font-size: 15px;
      line-height: 19px;
    }

    p {
      font-size: 12px;
      line-height: 15px;
      text-transform: capitalize;
      font-weight: 300;
    }
  }
`

/* Trending card  text div*/
export const TextDiv = styled.div`
  display: flex;

  @media (max-width: 768px) {
    width: 60%;
    margin-bottom: 5px;
    justify-content: space-between;
  }
`

/* Trending card title div*/
export const TitleDiv = styled.div`
  width: 100%;
  text-align: start !important;
`

/* Search input Container */

export const Div = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

/* Full icon */

export const EmptyIcon = styled(BookEmpty)`
  &:hover {
  }
`
