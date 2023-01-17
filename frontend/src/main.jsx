import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Layout from "./components/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "../src/components/styles/Global.styled";
import { StateContext } from "../src/Context/StateContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <StateContext>
        <Layout>
          <GlobalStyles />
          <App />
        </Layout>
      </StateContext>
    </Router>
  </React.StrictMode>
);
