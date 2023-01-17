import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500&display=swap");

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
  font-family: "Outfit", sans-serif;
  font-weight: 300;
}

.carousel {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}

.movie-icon {
  margin-right: 5px;
}


.control-arrow {
  background-color: transparent !important;
}
`;
