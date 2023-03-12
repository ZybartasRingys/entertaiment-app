import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500&display=swap");


:root {
  --color-red: #FC4747;
  --color-dark-blue: #10141E;
  --color-greyish-blue: #5A698F;
  --color-semi-dark-blue: #161D2F;
  --color-white: #FFFFFF;
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
  font-family: "Outfit-medium", sans-serif;
  font-weight: 300;
}

.carousel {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}

.slide {
  min-width: 70% !important;
  margin-left: 16px ;
}

.movie-icon {
  margin-right: 5px;
}


.control-arrow {
  background-color: transparent !important;
}
`;
