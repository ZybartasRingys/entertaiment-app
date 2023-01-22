import { useContext } from "react";
import {
  CardContainer,
  IconDiv,
  TextContainer,
  TitleDiv,
  TextDiv,
  Div,
  IconContainer,
} from "../../components/styles/Trending.styled";

// icons

import { ReactComponent as BookmarkIcon } from "../../assets/icon-bookmark-empty.svg";
import { ReactComponent as MovieIcon } from "../../assets/icon-category-movie.svg";
import { BsDot } from "react-icons/bs";

// react Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { useStateContext } from "../../Context/StateContext";

function TrendingCard() {
  const { loading, setLoading, trending } = useStateContext();

  return (
    <Carousel
      className="carousel"
      showArrows={true}
      showThumbs={false}
      centerMode={true}
      showIndicators={false}
      showStatus={false}
    >
      {trending.map((trendingMovie, id) => (
        <CardContainer key={id}>
          <IconContainer>
            <IconDiv>
              <BookmarkIcon />
            </IconDiv>
          </IconContainer>

          <TextContainer>
            <TextDiv>
              <Div>
                <p>{trendingMovie.year}</p>
                <BsDot />
              </Div>
              <Div>
                <MovieIcon />
                <p>{trendingMovie.category}</p>
                <BsDot />
              </Div>
              <Div>
                <p>{trendingMovie.rating}</p>
              </Div>
            </TextDiv>

            <TitleDiv>
              <h5>{trendingMovie.title}</h5>
            </TitleDiv>
          </TextContainer>
        </CardContainer>
      ))}
    </Carousel>
  );
}

export default TrendingCard;
