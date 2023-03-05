/* eslint-disable no-unused-vars */
// Components
import TrendingCard from "./TrendingCard";

// Loader Component
import Loading from "../Loading";
/* Styled Componenets imports */
import { TrendingSection } from "../../components/styles/Trending.styled";
/* Context */
import { useStateContext } from "../../Context/StateContext";

/* react carousel */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Trending({ trending }) {
  const trendCard = trending.map((movie) => {
    return <TrendingCard movie={movie} key={movie._id} />;
  });

  return (
    <TrendingSection>
      <h1>Trending</h1>
      <Carousel
        className="carousel"
        showArrows={true}
        showThumbs={false}
        centerMode={true}
        showIndicators={false}
        showStatus={false}
      >
        {trendCard?.length ? trendCard : <p>No movies</p>}
      </Carousel>
    </TrendingSection>
  );
}

export default Trending;
