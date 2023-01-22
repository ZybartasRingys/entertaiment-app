import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { GlobalStyles } from "../src/components/styles/Global.styled";
import { StateContext } from "../src/Context/StateContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateContext>
      <GlobalStyles />
      <App />
    </StateContext>
  </React.StrictMode>
);
