import { NavContainer, Div, IconsDiv, UserDiv } from "./styles/Header.styled";
import { Link } from "react-router-dom";
// Icons
import { ReactComponent as HomeIcon } from "../assets/icon-nav-home.svg";
import { ReactComponent as MovieIcon } from "../assets/icon-nav-movies.svg";
import { ReactComponent as TvSeriesIcon } from "../assets/icon-nav-tv-series.svg";
import { ReactComponent as BookmarkedIcon } from "../assets/icon-nav-bookmark.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";

function Header() {
  return (
    <NavContainer>
      <Div>
        <Logo height={20} width={25} />
      </Div>
      <IconsDiv>
        <Link to="/">
          <HomeIcon />
        </Link>
        <Link to="/">
          <MovieIcon />
        </Link>
        <Link to="/">
          <TvSeriesIcon />
        </Link>
        <Link to="/">
          <BookmarkedIcon />
        </Link>
      </IconsDiv>

      <UserDiv></UserDiv>
    </NavContainer>
  );
}

export default Header;
