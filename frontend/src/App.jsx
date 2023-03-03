import "./App.css";

/* Router  imports */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Layout */
import Layout from "./components/Layout";
/* Pages */
import Home from "./components/Pages/Home";
import Movies from "./components/Pages/Movies";
import TvSeries from "./components/Pages/TvSeries";
import Bookmarked from "./components/Pages/Bookmarked";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";

import { useStateContext } from "./Context/StateContext";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/TvSeries" element={<TvSeries />} />
          <Route path="/Bookmarked" element={<Bookmarked />} />
        </Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
