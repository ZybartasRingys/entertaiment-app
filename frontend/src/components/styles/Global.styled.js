import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500&display=swap");


:root {
  --color-red: #FC4747;
  --color-dark-blue: #10141E;
  --color-greyish-blue: #5A698F;
  --color-semi-dark-blue: #161D2F;
  --color-white: #FFFFFF;


  --font-size-heading-l: 32px;
  --font-size-heading-m: 24px;
  --font-size-heading-s: 18px;
 
  --font-size-body-m: 15px;
  --font-size-body-s: 13px;
}
  

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  background-color: #10141e;
  color: white;
  font-family: "Outfit";
  font-weight: 300;
}

.carousel {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .slide {
 
    min-width: 70% !important;
 
   /* tablet */
   @media (min-width: 768px) and (max-width: 1024px) {
    min-width: 68% !important;
    }

    /* Desktop */
  @media (min-width: 1439px) {
   
   min-width: 36% !important;
  }


  }

  
  
  /* Mobile */
  @media (max-width: 768px) {
    
  }
  /* tablet */
  @media (min-width: 768px) and (max-width: 1024px) {
   
  }

  
}



.movie-icon {
  margin-right: 5px;
}


.control-arrow {
  background-color: transparent !important;
}
`;
