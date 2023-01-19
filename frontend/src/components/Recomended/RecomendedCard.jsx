/* Styled Componenets imports*/

import { RecomendedContainer } from "./styles/Recomended.styled";

/* Styled Componenets imports*/
import {
  IconDiv,
  TitleDiv,
  TextDiv,
  Div,
  IconContainer,
} from "./styles/Trending.styled";

//Loader Component
import Loading from "./Loading";

// Context
import { useStateContext } from "../../Context/StateContext";
/* Icons*/
import BookmarkIcon from "../public/assets/icon-bookmark-empty.svg";
import MovieIcon from "../public/assets/icon-category-movie.svg";
import { BsDot } from "react-icons/bs";

function RecomendedCard() {
  const { loading } = useStateContext();
  return (
    <RecomendedContainer>
      {loading ? (
        <Loading />
      ) : (
        recomended.slice(0, 20).map((movie, id) => (
          <RecomendedCard key={id}>
            {console.log(id)}
            <CardTop
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <IconContainer>
                <IconDiv
                  type="button"
                  onClick={(e) => console.log(e.target.id)}
                >
                  <BookmarkIcon />
                </IconDiv>
              </IconContainer>
            </CardTop>

            <CardBottom>
              <TextDiv>
                <Div>
                  <p>{movie.release_date.slice(0, 4)}</p>
                  <BsDot />
                </Div>
                <Div>
                  {movie.media_type === "movie" ? (
                    <MovieIcon className="movie-icon" />
                  ) : null}
                  <p> {movie.media_type}</p>
                  <BsDot />
                </Div>
                <Div>
                  <p>PG</p>
                </Div>
              </TextDiv>

              <TitleDiv>
                <h2>{movie.title}</h2>
              </TitleDiv>
            </CardBottom>
          </RecomendedCard>
        ))
      )}
    </RecomendedContainer>
  );
}

export default RecomendedCard;
