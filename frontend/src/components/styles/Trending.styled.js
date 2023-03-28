import styled from "styled-components";
import { ReactComponent as BookEmpty } from "../../assets/icon-bookmark-empty.svg";
import { ReactComponent as BookFull } from "../../assets/icon-bookmark-full.svg";
import { PlayDiv } from "./Recommended";
import { ReactComponent as Movie } from "../../assets/icon-category-movie.svg";
import { ReactComponent as Tv } from "../../assets/icon-category-tv.svg";

/* Trending Section */

export const TrendingSection = styled.section`
  background-color: #10141e;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    font-family: "Outfit";
    font-weight: 300;
    padding-left: 15px;
  }
  /* Mobile */
  @media (max-width: 768px) {
    margin-top: 15px;

    h1 {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }
  /* tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    h1 {
      font-size: 32px;
      font-style: light;
      margin-bottom: 15px;
    }
  }

  /* Desktop */
  @media (min-width: 1439px) {
    margin-left: 136px;
    margin-top: 34px;

    h1 {
      margin-bottom: 25px;
      font-size: var(--font-size-heading-l);
    }
  }
`;

export const TrendingCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 2px solid red;
  display: flex;

  /* Mobile */
  @media (max-width: 768px) {
  }
  /* tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
  }

  /* Desktop */
  @media (min-width: 1439px) {
  }
`;

/* Trending Card Container */
export const CardContainer = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    filter: brightness(80%);
    transition: all 0.4s;
    transform: scale(1.1);

    ${PlayDiv} {
      filter: brightness(100%) !important;
      opacity: 1;
    }
  }
  h2 {
    font-size: 15px;
    color: #ffffff;
  }

  /* Mobile */
  @media (max-width: 768px) {
    width: 240px !important;
    height: 140px;
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    width: 470px;
    height: 230px;
  }

  /* Desktop */
  @media (min-width: 1440px) {
    width: 470px;
    height: 230px;
  }
`;

/* Full icon */

export const EmptyIcon = styled(BookEmpty)`
  &:hover {
    color: #000000;
    fill: #000000;
  }
`;

export const FullIcon = styled(BookFull)`
  &:hover {
    color: #000000;
    fill: #000000;
  }
`;

/* Trending IconContainer */
export const IconContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
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

  &:hover svg path {
    fill: white;
    stroke-width: 2px;
    stroke: black;
  }

  /* Mobile */
  @media (max-width: 768px) {
    margin-top: 8px;
    margin-right: 10px;
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    margin-top: 16px;
    margin-right: 16px;
  }

  /* tablet */
  @media (min-width: 1439px) {
    margin-top: 16px;
    margin-right: 16px;
  }
`;

/* Trending card  text container*/
export const TextContainer = styled.div`
  width: 100%;

  /* Mobile */
  @media (max-width: 768px) {
    padding-left: 16px;
    margin-bottom: 16px;

    h5 {
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

  /* tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    padding-left: 24px;
    margin-bottom: 24px;

    h5 {
      font-size: 24px;
      line-height: 30px;
    }

    p {
      font-size: 15px;
      line-height: 15px;
      text-transform: capitalize;
      font-weight: 300;
    }
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    padding-left: 24px;
    margin-bottom: 24px;

    h5 {
      font-size: 24px;
      line-height: 30px;
    }

    p {
      font-size: 15px;
      line-height: 15px;
      text-transform: capitalize;
      font-weight: 300;
    }
  }

  /* Desktop */
  @media (min-width: 1439px) {
    padding-left: 24px;
    margin-bottom: 24px;

    h5 {
      font-size: 24px;
      line-height: 30px;
    }

    p {
      font-size: 15px;
      line-height: 15px;
      text-transform: capitalize;
      font-weight: 300;
    }
  }
`;

/* Trending card  text div*/
export const TextDiv = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.75;

  @media (max-width: 768px) {
    width: 60%;
    margin-bottom: 5px;
  }
  /* tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    width: 35%;
    justify-content: space-between;
  }
`;

/* Trending card title div*/
export const TitleDiv = styled.div`
  width: 100%;
  text-align: start !important;
  margin-top: 2px;
`;

/* Search input Container */

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Mobile */
  @media (max-width: 768px) {
  }
`;

/* Icons */

export const MovieIcon = styled(Movie)`
  transform: scale(0.8);
  /* Mobile */
  @media (max-width: 768px) {
    margin-right: 4px;
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    transform: scale(0.9);
    margin-right: 4px;
  }

  /* Desktop */
  @media (min-width: 1439px) {
    margin-right: 4px;
    transform: scale(1);
  }
`;

export const TvIcon = styled(Tv)`
  transform: scale(0.9);
  /* Mobile */
  @media (max-width: 768px) {
    margin-right: 4px;
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    transform: scale(0.9);
    margin-right: 4px;
  }
  /* Desktop */
  @media (min-width: 1439px) {
    margin-right: 4px;
    transform: scale(1);
  }
`;
