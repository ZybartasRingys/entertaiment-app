/* Styled Components imports */

import {
  CardContainer,
  IconDiv,
  TextContainer,
  TitleDiv,
  TextDiv,
  IconContainer,
  EmptyIcon,
  MovieIcon,
  FullIcon,
} from '../../components/styles/Trending.styled'
/* Styled Components imports */
import { PlayDiv, PlayIcon } from '../../components/styles/Recommended'

/* Icons */

import { BsDot } from 'react-icons/bs'

/* Context */
import { useStateContext } from '../../Context/StateContext'
import { useAuthContext } from '../../hooks/useAuthContext'

function TrendingCard({ movie }) {
  const { title, _id, isBookmarked, year, category, rating, thumbnail } = movie
  const { addBookmark, remBookmark } = useStateContext()
  const { user } = useAuthContext()

  return (
    <CardContainer
      key={_id}
      style={{
        backgroundImage: `url(/${title
          .trim()
          .toLowerCase()
          .replace(/ /g, '')}.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <PlayDiv>
        <PlayIcon />
        Play
      </PlayDiv>

      <IconContainer>
        {isBookmarked ? (
          <IconDiv type='button' onClick={(e) => remBookmark(_id)}>
            <FullIcon />
          </IconDiv>
        ) : (
          <IconDiv type='button' onClick={(e) => addBookmark(_id)}>
            <EmptyIcon />
          </IconDiv>
        )}
      </IconContainer>

      <TextContainer>
        <TextDiv>
          <p>{year}</p>
          <BsDot />
          <MovieIcon />
          <p>{category}</p>
          <BsDot />
          <p>{rating}</p>
        </TextDiv>

        <TitleDiv>
          <h5>{title}</h5>
        </TitleDiv>
      </TextContainer>
    </CardContainer>
  )
}

export default TrendingCard
