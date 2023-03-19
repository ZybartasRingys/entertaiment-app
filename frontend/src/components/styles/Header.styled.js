import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/icon-nav-home.svg";
import { ReactComponent as MovieIcon } from "../../assets/icon-nav-movies.svg";
import { ReactComponent as TvSeriesIcon } from "../../assets/icon-nav-tv-series.svg";
import { ReactComponent as BookmarkedIcon } from "../../assets/icon-nav-bookmark.svg";
export const NavContainer = styled.nav`
  width: 100%;
  color: var(--color-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #161d2f;

  /* Mobile */
  @media (max-width: 768px) {
    padding: 15px 15px;
    height: 56px;
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    height: 72px;
    padding: 25px 25px;
    max-width: 719px;
    border-radius: 10px;
  }

  /* Desktop */
  @media (min-width: 1439px) {
    position: absolute;
    width: 96px;
    height: 700px;
    border-radius: 20px;
    top: 32px;
    left: 32px;
    flex-direction: column;
    justify-content: start;
  }
`;

export const LogoDiv = styled.div`
  /* Mobile */
  @media (max-width: 768px) {
    svg {
      width: 100%;
      height: 100%;
    }
  }

  /* Desktop */
  @media (min-width: 1439px) {
    margin-top: 35px;
  }
`;

export const Div = styled.div``;

export const IconsDiv = styled.div`
  display: flex;
  justify-content: space-between;

  /* Mobile */
  @media (max-width: 768px) {
    width: 45%;
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1439px) {
    width: 26%;
  }

  /* Desktop */
  @media (min-width: 1439px) {
    height: 200px !important;
    flex-direction: column;
    margin-top: 75px;
  }
`;

export const UserDiv = styled.button`
  background-color: transparent;
  border: none;
  color: var(--color-white);
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 9px;

  /* Desktop */
  @media (min-width: 1439px) {
    width: 40px;
    height: 40px;
    margin-top: 300px;
  }
`;

// navbar icons styles

/* Logo icon styling */

export const LogoIcon = styled(Logo)`
  width: 100%;
  height: 100%;
  /* Mobile */
  @media (max-width: 768px) {
    transform: scale(0.8);
  }
`;

export const LogoLink = styled(Link)``;

/* Icons styling */

export const BaseNavLink = styled(NavLink)`
  &.active path {
    fill: var(--color-white);
  }
`;

export const Home = styled(HomeIcon)`
  /* Mobile */
  @media (max-width: 768px) {
    transform: scale(0.8);
  }
`;

export const Movie = styled(MovieIcon)`
  /* Mobile */
  @media (max-width: 768px) {
    transform: scale(0.8);
  }
`;

export const Series = styled(TvSeriesIcon)`
  /* Mobile */
  @media (max-width: 768px) {
    transform: scale(0.8);
  }
`;

export const Bookmarked = styled(BookmarkedIcon)`
  /* Mobile */
  @media (max-width: 768px) {
    transform: scale(0.8);
  }
`;
