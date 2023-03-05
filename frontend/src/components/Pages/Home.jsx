/* eslint-disable no-unused-vars */
import Trending from "../Trending/Trending";
import Recomended from "../Recomended/Recomended";

import { useStateContext } from "../../Context/StateContext";

function Home() {
  const { trending, recomended } = useStateContext();
  return (
    <>
      <Trending trending={trending} />
      <Recomended recomended={recomended} />
    </>
  );
}
export default Home;
