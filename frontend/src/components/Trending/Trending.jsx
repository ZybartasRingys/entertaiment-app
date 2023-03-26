/* eslint-disable no-unused-vars */
// Components
import TrendingCard from "./TrendingCard";

// Loader Component
import Loading from "../Loading";
/* Styled Components imports */
import { TrendingSection } from "../../components/styles/Trending.styled";
/* Context */

/* react carousel */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useStateContext } from "../../Context/StateContext";
function Trending({}) {
  const { trending } = useStateContext();
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
        centerSlidePercentage={80}
        showIndicators={false}
        showStatus={false}
      >
        {trendCard?.length ? trendCard : <p>No movies</p>}
      </Carousel>
    </TrendingSection>
  );
}

export default Trending;
