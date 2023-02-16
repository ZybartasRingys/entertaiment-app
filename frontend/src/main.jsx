import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { GlobalStyles } from "../src/components/styles/Global.styled";
import { StateContext } from "../src/Context/StateContext";
import { AuthContextProvider } from "./Context/authContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <StateContext>
        <GlobalStyles />
        <App />
      </StateContext>
    </AuthContextProvider>
  </React.StrictMode>
);
