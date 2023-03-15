import {
  NavContainer,
  IconsDiv,
  UserDiv,
  LogoDiv,
  Div,
  LogoIcon,
  LogoLink,
  BaseNavLink,
} from "./styles/Header.styled";
import { NavLink } from "react-router-dom";
import { useState } from "react";
/* Icons */
import { ReactComponent as HomeIcon } from "../assets/icon-nav-home.svg";
import { ReactComponent as MovieIcon } from "../assets/icon-nav-movies.svg";
import { ReactComponent as TvSeriesIcon } from "../assets/icon-nav-tv-series.svg";
import { ReactComponent as BookmarkedIcon } from "../assets/icon-nav-bookmark.svg";

import {
  AiOutlineCloseCircle,
  AiOutlineLogin,
  AiOutlineUser,
} from "react-icons/ai";

/* Context */
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
/* Modal */
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
      <LogoDiv>
        <LogoLink to="/">
          <LogoIcon />
        </LogoLink>
      </LogoDiv>
      <IconsDiv>
        <BaseNavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <HomeIcon />
        </BaseNavLink>
        <BaseNavLink
          to="/Movies"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <MovieIcon />
        </BaseNavLink>
        <BaseNavLink
          to="/TvSeries"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <TvSeriesIcon />
        </BaseNavLink>

        {user ? (
          <BaseNavLink
            to="/Bookmarked"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <BookmarkedIcon />
          </BaseNavLink>
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
