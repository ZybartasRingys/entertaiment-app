import styled from "styled-components";
import { ReactComponent as Play } from "../../assets/icon-play.svg";
/* Recommended Section */
export const RecommendedSection = styled.section`
  width: 100%;
  height: 100%;
  /* Mobile */
  @media (max-width: 768px) {
    margin-top: 30px;
    margin-left: 15px;

    h1 {
      font-family: "Outfit", sans-serif;
      font-size: 20px;
      font-weight: 300;
    }
  }

  /* Tablet */

  @media (min-width: 768px) and (max-width: 1440px) {
    margin-top: 30px;
    margin-left: 15px;

    h1 {
      font-family: "Outfit", sans-serif;
      font-size: 20px;
      font-weight: 300;
    }
  }
`;

export const RecommendedContainer = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 7px;
    margin-top: 30px;
    padding-right: 15px;
  }

  /* Tablet */

  @media (min-width: 768px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr !important;
  }
`;

/* Recommended Card Container*/
export const RecommendedCard = styled.div`
  width: 100%;
  /* Mobile */
  @media (max-width: 768px) {
    height: 154px;
    margin-bottom: 30px;
  }
  /* Tablet */
  @media (min-width: 768px) and (max-width: 1440px) {
    height: 192px;
  }
`;

export const PlayDiv = styled.div`
  position: absolute;

  /* Mobile */
  @media (max-width: 768px) {
    width: 65px;
    height: 28px;
    left: 30%;
    top: 42%;
    font-size: 12px;
    border-radius: 29px;
    background: rgba(0, 0, 0, 0.5);
    color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    cursor: pointer;
  }
`;

/* Recommended card top section */

export const CardTop = styled.div`
  border-radius: 8px;
  position: relative;
  width: 100%;
  /* Mobile */
  @media (max-width: 768px) {
    max-width: 164px;
    height: 110px;
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1440px) {
    max-width: 220px;
    height: 140px;
  }
  &:hover {
    filter: brightness(80%);
    transition: all 0.4s;
    transform: scale(1.1);

    ${PlayDiv} {
      filter: brightness(100%) !important;
      opacity: 1;
    }
  }
`;

/* Recommended card bottom section */

export const CardBottom = styled.div`
  /* Mobile */
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    max-height: 52px;
  }

  h2 {
    font-size: 14px;
    line-height: 18px;
    font-family: "Outfit", sans-serif;
    font-style: medium;
  }

  p {
    font-size: 12px;
    line-height: 15px;
    text-transform: capitalize;
    font-weight: 300;
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
  /* Mobile */
  @media (max-width: 768px) {
    width: 82%;
    height: 100%;
    max-height: 32px;
    justify-content: start;
    align-items: center;

    p {
      font-size: 11px;
      font-weight: 300;
    }
  }
`;

export const CardP = styled.p`
  margin-left: 3px;
  margin-top: 2px;
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
`;
