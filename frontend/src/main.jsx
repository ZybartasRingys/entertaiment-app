import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { GlobalStyles } from "../src/components/styles/Global.styled";
import { StateContext } from "../src/Context/StateContext";
import { AuthContextProvider } from "../src/Context/AuthContext";
import { ModalProvider } from "styled-react-modal";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ModalProvider>
        <StateContext>
          <GlobalStyles />
          <App />
        </StateContext>
      </ModalProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
