import styled from "styled-components";
import { ReactComponent as Play } from "../../assets/icon-play.svg";
/* Recommended Section */
export const RecommendedSection = styled.section`
  width: 100%;
  height: 100%;

  h1 {
    font-family: "Outfit";
  }
  /* Mobile */
  @media (max-width: 768px) {
    margin-top: 30px;
    margin-left: 15px;

    h1 {
      font-size: 20px;
      font-weight: 300;
    }
  }

  /* Tablet */

  @media (min-width: 768px) and (max-width: 1439px) {
    margin-top: 30px;
    margin-left: 24px;

    h1 {
      font-style: normal;
      font-weight: 300;
      font-size: var(--font-size-heading-l);
      line-height: 40px;
      letter-spacing: -0.5px;
      margin-bottom: 20px;
    }
  }

  /* Desktop */

  @media (min-width: 1440px) {
    max-width: 1240px;
    margin-left: 164px;
    margin-top: 40px;

    h1 {
      margin-bottom: 32px;
      font-style: normal;
      font-weight: 300;
      font-size: var(--font-size-heading-l);
      line-height: 40px;
      letter-spacing: -0.5px;
      margin-bottom: 20px;
    }
  }
`;

export const RecommendedContainer = styled.div`
  width: 100%;
  height: 100%;

  /* Mobile */
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 7px;
    margin-top: 30px;
    padding-right: 15px;
  }

  /* Tablet */

  @media (min-width: 768px) and (max-width: 1439px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr !important;
  }

  /* Desktop  */

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr !important;
  }
`;

/* Recommended Card Container*/
export const RecommendedCard = styled.div`
  width: 100%;
  /* Mobile */
  @media (max-width: 768px) {
    height: 154px;
    max-width: 164px;
    margin-bottom: 15px;
  }
  /* Tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    height: 192px;
    max-width: 220px;
    margin-bottom: 23px;
  }

  /* Desktop */
  @media (min-width: 1439px) {
    height: 226px;
    max-width: 280px;
    margin-bottom: 23px;
  }
`;

export const PlayDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  cursor: pointer;
  border-radius: 29px;
  background: rgba(0, 0, 0, 0.5);
  color: var(--color-white);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  /* Mobile */
  @media (max-width: 768px) {
    width: 65px;
    height: 28px;
    font-size: 12px;
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    width: 85px;
    height: 32px;
    font-size: 15px;
  }

  /* Desktop */
  @media (min-width: 1439px) {
    width: 117px;
    height: 42px;
    font-size: 23px;
  }
`;

/* Recommended card top section */

export const CardTop = styled.div`
  border-radius: 8px;
  position: relative;
  width: 100%;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;

  /* Mobile */
  @media (max-width: 768px) {
    height: 110px;
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    height: 140px;
  }

  /* Desktop */
  @media (min-width: 1439px) {
    height: 174px;
  }

  &:hover {
    filter: brightness(80%);
    transform: scale(1.1);
    ${PlayDiv} {
      filter: brightness(100%) !important;
      opacity: 0.9;
    }
  }
`;

/* Recommended card bottom section */

export const CardBottom = styled.div`
  font-family: "Outfit";
  font-style: medium;
  max-height: 44px;
  width: 100%;
  height: 100%;
  margin-top: 10px;

  h2 {
    font-size: 14px;
    line-height: 18px;
  }

  p {
    font-size: 12px;
    line-height: 15px;
    text-transform: capitalize;
    font-weight: 300;
  }
  /* Mobile */
  @media (max-width: 768px) {
    max-height: 32px;
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
  }

  /* Desktop */
  @media (min-width: 1439px) {
    height: 174px;
  }
`;

/* Recommended card div */

export const CardDiv = styled.div`
  opacity: 0.75;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BottomCardDiv = styled.div`
  display: flex;
  opacity: 0.75;
  align-items: center;

  /* Mobile */
  @media (max-width: 768px) {
    width: 82%;
    height: 100%;
    max-height: 14px;
    justify-content: start;
    margin-bottom: 3px;

    p {
      font-size: 11px;
      font-weight: 300;
    }
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    width: 70%;
  }
`;

export const CardP = styled.p`
  font-family: "Outfit";

  /* tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    font-style: normal;
    font-weight: 300;
    font-size: 13px !important;
    line-height: 16px;
  }

  /* Desktop */
  @media (min-width: 1439px) {
    font-size: 15px !important;
  }
`;

export const PlayIcon = styled(Play)`
  fill: var(--color-white);
  background-position: center;
  /* Mobile */
  @media (max-width: 768px) {
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    transform: scale(0.7);
    margin-right: 8px;
  }

  /* Desktop */
  @media (min-width: 1439px) {
    transform: scale(0.7);
    margin-right: 8px;
  }
`;
