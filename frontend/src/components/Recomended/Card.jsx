/* Styled Components imports*/

import {
  CardTop,
  CardBottom,
  RecommendedCard as RecommendedCard,
  PlayDiv,
  BottomCardDiv,
  CardP,
  PlayIcon,
} from '../styles/Recommended'

/* Styled Components imports*/
import {
  IconDiv,
  TitleDiv,
  IconContainer,
  MovieIcon,
  TvIcon,
} from '../styles/Trending.styled'

/* Icons*/
import { ReactComponent as BookEmpty } from '../../assets/icon-bookmark-empty.svg'
import { ReactComponent as BookFull } from '../../assets/icon-bookmark-full.svg'

import { BsDot } from 'react-icons/bs'

/* Context*/
import { useAuthContext } from '../../hooks/useAuthContext'
import { useStateContext } from '../../Context/StateContext'

function Card({ movie }) {
  const { title, _id, isBookmarked, year, category, rating, thumbnail } = movie
  const { user } = useAuthContext()

  const { addBookmark, remBookmark } = useStateContext()

  return (
    <RecommendedCard key={_id}>
      <CardTop
        style={{
          background: `url(/public/${thumbnail.regular.large})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgrounPposition: '0% 0%',
        }}
      >
        <PlayDiv>
          <PlayIcon />
          <CardP>Play</CardP>
        </PlayDiv>

        {user ? (
          <IconContainer>
            {isBookmarked ? (
              <IconDiv type='button' onClick={(e) => remBookmark(_id)}>
                <BookFull />
              </IconDiv>
            ) : (
              <IconDiv type='button' onClick={(e) => addBookmark(_id)}>
                <BookEmpty />
              </IconDiv>
            )}
          </IconContainer>
        ) : null}
      </CardTop>

      <CardBottom>
        <BottomCardDiv>
          <CardP>{year}</CardP>
          <BsDot size={12} />
          {category === 'Movie' ? <MovieIcon /> : <TvIcon />}
          <CardP>{category}</CardP>
          <BsDot size={12} />
          <CardP>{rating}</CardP>
        </BottomCardDiv>

        <TitleDiv>
          <h2>{title}</h2>
        </TitleDiv>
      </CardBottom>
    </RecommendedCard>
  )
}

export default Card
