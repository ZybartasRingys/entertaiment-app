import React from 'react'

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
} from '../styles/Recommended'

/* Styled Components imports*/
import {
  IconDiv,
  TitleDiv,
  Div,
  IconContainer,
  MovieIcon,
  TvIcon,
} from '../styles/Trending.styled'

import { ReactComponent as BookEmpty } from '../../assets/icon-bookmark-empty.svg'
import { ReactComponent as BookFull } from '../../assets/icon-bookmark-full.svg'

import { BsDot } from 'react-icons/bs'

import { useAuthContext } from '../../hooks/useAuthContext'
import { useStateContext } from '../../Context/StateContext'

function TvSeriesCard({ movie }) {
  const { title, year, category, rating, _id, thumbnail, isBookmarked } = movie
  const { user } = useAuthContext()
  const { addBookmark, remBookmark } = useStateContext()
  return (
    <RecommendedCard key={_id}>
      <CardTop
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
          <CardP>Play</CardP>
        </PlayDiv>
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

export default TvSeriesCard
