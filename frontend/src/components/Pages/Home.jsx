import React from "react";

import Search from "../Search";
import Trending from "../Trending/Trending";
import Recomended from "../Recomended/Recomended";

function Home() {
  return (
    <>
      <Search />
      <Trending />
      <Recomended />
    </>
  );
}
export default Home;
