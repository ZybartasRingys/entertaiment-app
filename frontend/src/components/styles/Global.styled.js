import { createGlobalStyle } from 'styled-components'

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

  --toastify-color-dark:  #161D2F;
  --toastify-text-color-success: #FFFFFF;
}
  

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow: scroll;
  background-color: #10141e;
  color: white;
  font-family: "Outfit";
  font-weight: 300;
  max-height: 1500px;
  scrollbar-width: none;

}

body::-webkit-scrollbar{
    display: none;
  }

  .search-text {
    display: none;
    
  }


.carousel {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 7px;
  
  

  .slide {
    padding: 15px;
    min-width: 71% !important;
    transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;

    
  &:hover background {
    filter: brightness(80%);
    transform: scale(1.1);
    

  }
 
   /* tablet */
   @media (min-width: 768px) and (max-width: 1024px) {
    min-width: 69% !important;
    padding-left: 26px;
    }

    /* Desktop */
  @media (min-width: 1439px) {
    padding-left: 36px;
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






.control-arrow {
  background-color: transparent !important;
}
`
