/* Styled Componenets imports*/

import {
  RecomendedContainer,
  CardTop,
  CardBottom,
  CardDiv,
  RecomendedCard,
} from "../styles/Recomended.styled";

/* Styled Componenets imports*/
import {
  IconDiv,
  TitleDiv,
  TextDiv,
  Div,
  IconContainer,
} from "../styles/Trending.styled";

//Loader Component
import Loading from "../Loading";

// Context
import { useStateContext } from "../../Context/StateContext";
/* Icons*/
import { ReactComponent as TvIcon } from "../../assets/icon-category-tv.svg";
import { ReactComponent as MovieIcon } from "../../assets/icon-category-movie.svg";
import { BsDot } from "react-icons/bs";

function Card() {
  const { recomended } = useStateContext();

  return (
    <RecomendedContainer>
      {recomended.map((movie, id) => (
        <RecomendedCard key={id}>
          <CardTop>
            <IconContainer>
              <IconDiv></IconDiv>
            </IconContainer>
          </CardTop>

          <CardBottom>
            <CardDiv>
              <Div>
                <p>{movie.year}</p>
                <BsDot size={12} />
              </Div>
              <Div>
                {movie.category === "Movie" ? <MovieIcon /> : <TvIcon />}
                <p>{movie.category}</p>
              </Div>
              <Div>
                <BsDot size={11} />
                <p>{movie.rating}</p>
              </Div>
            </CardDiv>

            <TitleDiv>
              <h2>{movie.title}</h2>
            </TitleDiv>
          </CardBottom>
        </RecomendedCard>
      ))}
    </RecomendedContainer>
  );
}

export default Card;
