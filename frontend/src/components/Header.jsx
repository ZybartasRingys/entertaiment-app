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
        <Link to="/">
          <Logo height={20} width={25} />
        </Link>
      </Div>
      <IconsDiv>
        <Link to="/">
          <HomeIcon />
        </Link>
        <Link to="/Movies">
          <MovieIcon />
        </Link>
        <Link to="/TvSeries">
          <TvSeriesIcon />
        </Link>
        <Link to="/Bookmarked">
          <BookmarkedIcon />
        </Link>
      </IconsDiv>

      <UserDiv></UserDiv>
    </NavContainer>
  );
}

export default Header;
