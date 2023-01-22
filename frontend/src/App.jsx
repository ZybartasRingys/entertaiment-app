import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./components/Pages/Home";
import Movies from "./components/Pages/Movies";
import TvSeries from "./components/Pages/TvSeries";
import Bookmarked from "./components/Pages/Bookmarked";

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
      </Routes>
    </Router>
  );
}

export default App;
