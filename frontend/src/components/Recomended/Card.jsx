/* Styled Components imports*/

import {
  CardTop,
  CardBottom,
  CardDiv,
  RecomendedCard,
} from "../styles/Recomended.styled";

/* Styled Components imports*/
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
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";

function Card({ movie }) {
  const { title, _id, isBookmarked, year, category, rating, thumbnail } = movie;
  const { user } = useAuthContext();

  const setBookmark = async () => {
    try {
      const response = await axios({
        method: "PUT",
        url: `http://localhost:5000/movies/${_id}`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        data: {
          isBookmarked: true,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const removeBookmark = async () => {
    try {
      const response = await axios({
        method: "PUT",
        url: `http://localhost:5000/movies/${_id}`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        data: {
          isBookmarked: false,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <RecomendedCard key={_id}>
      <CardTop
        style={{
          backgroundImage: `url(/public/${thumbnail.regular.small})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <IconContainer>
          {isBookmarked ? (
            <IconDiv type="button" onClick={removeBookmark}>
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
