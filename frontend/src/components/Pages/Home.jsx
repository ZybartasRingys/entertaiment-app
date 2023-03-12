/* eslint-disable no-unused-vars */
import Trending from "../Trending/Trending";
import Recomended from "../Recomended/Recomended";

function Home() {
  return (
    <div className="section">
      <Trending />
      <Recomended />
    </div>
  );
}
export default Home;
