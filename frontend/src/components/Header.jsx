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
} from './styles/Header.styled'

import { useState } from 'react'
/* Icons */

import {
  AiOutlineCloseCircle,
  AiOutlineLogin,
  AiOutlineUser,
} from 'react-icons/ai'

/* Context */
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
/* Modal */
import { StyledModal, StyledModalLink } from './styles/Modal.styled'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  function toggleModal(e) {
    setIsOpen(!isOpen)
  }
  return (
    <NavContainer>
      <LogoDiv>
        <LogoLink to='/'>
          <LogoIcon />
        </LogoLink>
      </LogoDiv>
      <IconsDiv>
        <BaseNavLink
          to='/'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          <Home />
        </BaseNavLink>
        <BaseNavLink
          to='/Movies'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          {' '}
          <Movie />
        </BaseNavLink>
        <BaseNavLink
          to='/TvSeries'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          <Series />
        </BaseNavLink>

        {user ? (
          <BaseNavLink
            to='/Bookmarked'
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            <Bookmarked />
          </BaseNavLink>
        ) : null}
      </IconsDiv>

      <UserDiv onClick={toggleModal}>
        {user ? (
          <AiOutlineUser fill='#ffff' size={25} />
        ) : (
          <AiOutlineLogin fill='#ffff' size={25} />
        )}
        <StyledModal
          isOpen={isOpen}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
        >
          {user ? (
            <Div>
              {user ? user.email : null}

              <button onClick={handleClick}>Log out</button>
            </Div>
          ) : (
            <>
              <StyledModalLink to='/Register'>Register</StyledModalLink>
              <StyledModalLink to='/Login'>Login</StyledModalLink>
            </>
          )}
          <button onClick={toggleModal}>
            <AiOutlineCloseCircle />
          </button>
        </StyledModal>
      </UserDiv>
    </NavContainer>
  )
}

export default Header
