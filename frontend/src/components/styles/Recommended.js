import styled from "styled-components";

/* Recommended Section */
export const RecommendedSection = styled.section`
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    margin-top: 30px;
    margin-left: 15px;
    max-width: 343px;

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
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-top: 30px;
  }
`;

/* Recommended Card Container*/
export const RecommendedCard = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    max-width: 164px;
    height: 100%;
    max-height: 154px;
    margin-bottom: 20px;
  }
`;

/* Recommended card top section */

export const CardTop = styled.div`
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 164px;
    height: 110px;
  }
`;

/* Recommended card bottom section */

export const CardBottom = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin-top: 8px;
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
  display: grid;
  grid-template-columns: 25% 55% 20%;
  opacity: 0.75;

  @media (max-width: 768px) {
    width: 68%;
    height: 100%;
    max-height: 32px;

    p {
      font-size: 10px;
      font-weight: 300;
    }
  }
`;
