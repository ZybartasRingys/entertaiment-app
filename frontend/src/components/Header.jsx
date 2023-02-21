import { NavContainer, Div, IconsDiv, UserDiv } from "./styles/Header.styled";
import { Link } from "react-router-dom";
// Icons
import { ReactComponent as HomeIcon } from "../assets/icon-nav-home.svg";
import { ReactComponent as MovieIcon } from "../assets/icon-nav-movies.svg";
import { ReactComponent as TvSeriesIcon } from "../assets/icon-nav-tv-series.svg";
import { ReactComponent as BookmarkedIcon } from "../assets/icon-nav-bookmark.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";

import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

function Header() {
  const { logout } = useLogout();

  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };
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

        {user ? (
          <Link to="/Bookmarked">
            <BookmarkedIcon />
          </Link>
        ) : null}
      </IconsDiv>

      {user ? (
        <Div>
          {user.email}
          <button onClick={handleClick}>Log out</button>
        </Div>
      ) : (
        <Div>
          <Link to="/Register">Register</Link>
          <Link to="/Login">Login</Link>
        </Div>
      )}

      <UserDiv></UserDiv>
    </NavContainer>
  );
}

export default Header;
