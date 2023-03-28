import { useState } from "react";
/* Styled components  */

import {
  NavContainer,
  IconsDiv,
  UserDiv,
  LogoDiv,
  Div,
  LogoIcon,
  LogoLink,
  BaseNavLink,
  Home,
  Movie,
  Series,
  Bookmarked,
  UserIcon,
} from "./styles/Header.styled";

import { LogoutBtn } from "./styles/Modal.styled";

/* Icons */

import { AiOutlineLogin } from "react-icons/ai";

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
          <Home />
        </BaseNavLink>
        <BaseNavLink
          to="/Movies"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          {" "}
          <Movie />
        </BaseNavLink>
        <BaseNavLink
          to="/TvSeries"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <Series />
        </BaseNavLink>

        {user ? (
          <BaseNavLink
            to="/Bookmarked"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <Bookmarked />
          </BaseNavLink>
        ) : null}
      </IconsDiv>

      <UserDiv onClick={toggleModal}>
        {user ? (
          <UserIcon fill="#ffff" size={32} />
        ) : (
          <AiOutlineLogin fill="#ffff" size={32} />
        )}
        <StyledModal
          isOpen={isOpen}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
        >
          {user ? (
            <Div>
              <p>Welcome</p>
              {user ? user.email : null}
              <LogoutBtn onClick={handleClick}>Log out</LogoutBtn>
            </Div>
          ) : (
            <>
              <StyledModalLink to="/Register">Register</StyledModalLink>
              <StyledModalLink to="/Login">Login</StyledModalLink>
            </>
          )}
        </StyledModal>
      </UserDiv>
    </NavContainer>
  );
}

export default Header;
