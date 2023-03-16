/* Styled Components imports*/
import {
  CardTop,
  CardBottom,
  CardDiv,
  RecommendedCard,
  BottomCardDiv,
  CardP,
  PlayDiv,
  PlayIcon,
} from './styles/Recommended'

/* Styled Components imports*/

import {
  IconDiv,
  TitleDiv,
  Div,
  IconContainer,
  MovieIcon,
  TvIcon,
} from './styles/Trending.styled'

/* Icons*/

import { ReactComponent as BookEmpty } from '../assets/icon-bookmark-empty.svg'
import { ReactComponent as BookFull } from '../assets/icon-bookmark-full.svg'

import { BsDot } from 'react-icons/bs'

import { useStateContext } from '../Context/StateContext'

function BookmarkedCard({ movie }) {
  const { title, isBookmarked, year, category, rating, _id, thumbnail } = movie
  const { remBookmark } = useStateContext()
  return (
    <div>
      <RecommendedCard key={_id}>
        <CardTop
          style={{
            backgroundImage: `url(/public/${thumbnail.regular.small})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <PlayDiv>
            <PlayIcon />
            <CardP>Play</CardP>
          </PlayDiv>
          <IconContainer>
            {isBookmarked ? (
              <IconDiv type='button' onClick={(e) => remBookmark(_id)}>
                <BookFull />
              </IconDiv>
            ) : (
              <IconDiv type='button'>
                <BookEmpty />
              </IconDiv>
            )}
          </IconContainer>
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
    </div>
  )
}

export default BookmarkedCard
