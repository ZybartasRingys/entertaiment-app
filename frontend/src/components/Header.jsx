import { NavContainer, Div, IconsDiv, UserDiv } from "./styles/Header.styled";
import { Link } from "react-router-dom";
import { useState } from "react";
// Icons
import { ReactComponent as HomeIcon } from "../assets/icon-nav-home.svg";
import { ReactComponent as MovieIcon } from "../assets/icon-nav-movies.svg";
import { ReactComponent as TvSeriesIcon } from "../assets/icon-nav-tv-series.svg";
import { ReactComponent as BookmarkedIcon } from "../assets/icon-nav-bookmark.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import {
  AiOutlineCloseCircle,
  AiOutlineLogin,
  AiOutlineUser,
} from "react-icons/ai";

import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

import { StyledModal, StyledModalLink } from "./styles/Modal.styled";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useLogout();

  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }
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

      <UserDiv onClick={toggleModal}>
        {user ? <AiOutlineLogin /> : <AiOutlineUser />}
        <StyledModal
          isOpen={isOpen}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
        >
          {user ? (
            <Div>
              {user.email}
              <button onClick={handleClick}>Log out</button>
            </Div>
          ) : (
            <>
              <StyledModalLink to="/Register">Register</StyledModalLink>
              <StyledModalLink to="/Login">Login</StyledModalLink>
            </>
          )}
          <button onClick={toggleModal}>
            <AiOutlineCloseCircle />
          </button>
        </StyledModal>
      </UserDiv>
    </NavContainer>
  );
}

export default Header;
