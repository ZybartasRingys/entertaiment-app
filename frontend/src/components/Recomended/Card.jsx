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
  Div,
  IconContainer,
} from "../styles/Trending.styled";

/* Icons*/
import { ReactComponent as BookEmpty } from "../../assets/icon-bookmark-empty.svg";
import { ReactComponent as BookFull } from "../../assets/icon-bookmark-full.svg";
import { ReactComponent as TvIcon } from "../../assets/icon-category-tv.svg";
import { ReactComponent as MovieIcon } from "../../assets/icon-category-movie.svg";
import { BsDot } from "react-icons/bs";
import Axios from "axios";

function Card({ movie }) {
  const { title, _id, isBookmarked, year, category, rating } = movie;

  const setBookmark = () => {
    Axios({
      method: "put",
      url: `http://localhost:5000/movies/${_id},  { $set: isBookmarked: true },
      { new: true }`,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.data.message);
    });
  };

  return (
    <RecomendedCard key={_id}>
      <CardTop>
        <IconContainer>
          {isBookmarked ? (
            <IconDiv type="button" onClick={setBookmark}>
              <BookFull />
            </IconDiv>
          ) : (
            <IconDiv type="button" onClick={setBookmark}>
              <BookEmpty />
            </IconDiv>
          )}
        </IconContainer>
      </CardTop>

      <CardBottom>
        <CardDiv>
          <Div>
            <p>{year}</p>
            <BsDot size={12} />
          </Div>
          <Div>
            {category === "Movie" ? <MovieIcon /> : <TvIcon />}
            <p>{category}</p>
          </Div>
          <Div>
            <BsDot size={11} />
            <p>{rating}</p>
          </Div>
        </CardDiv>

        <TitleDiv>
          <h2>{title}</h2>
        </TitleDiv>
      </CardBottom>
    </RecomendedCard>
  );
}

export default Card;
