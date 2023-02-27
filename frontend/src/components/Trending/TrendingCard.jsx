/* Styled Componenets imports*/
import {
  CardContainer,
  IconDiv,
  TextContainer,
  TitleDiv,
  TextDiv,
  Div,
  IconContainer,
} from "../../components/styles/Trending.styled";

/* Icons*/

import { ReactComponent as BookEmpty } from "../../assets/icon-bookmark-empty.svg";
import { ReactComponent as BookFull } from "../../assets/icon-bookmark-full.svg";
import { ReactComponent as MovieIcon } from "../../assets/icon-category-movie.svg";
import { BsDot } from "react-icons/bs";

/* react carousel*/
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
/* Context*/
import { useStateContext } from "../../Context/StateContext";
import { useAuthContext } from "../../hooks/useAuthContext";

function TrendingCard() {
  const { trending, addBookmark } = useStateContext();
  const { user } = useAuthContext();
  const trendingMovie = trending.map((movie) => {
    return movie;
  });

  const { isBookmarked } = trendingMovie;

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
        <CardContainer
          key={id}
          style={{
            backgroundImage: `url(/public/${trendingMovie.thumbnail.trending.small})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {user ? (
            <IconContainer>
              {isBookmarked ? (
                <IconDiv type="button">
                  <BookFull />
                </IconDiv>
              ) : (
                <IconDiv type="button" onClick={addBookmark}>
                  <BookEmpty />
                </IconDiv>
              )}
            </IconContainer>
          ) : (
            <IconContainer />
          )}

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
