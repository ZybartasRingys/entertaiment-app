import styled from "styled-components";

import { RecommendedSection, RecommendedContainer } from "./Recommended";

/* Recommended Section and Container */
export const CardsSection = styled(RecommendedSection)`
  /* Mobile */
  @media (max-width: 768px) {
  }

  /* Tablet */

  @media (min-width: 768px) and (max-width: 1439px) {
  }

  /* Desktop  */

  @media (min-width: 1440px) {
    h1 {
      font-size: var(----font-size-heading-l);
    }
  }
`;

export const CardsContainer = styled(RecommendedContainer)`
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

/* Cards styling */
