/* Styled Componenets imports*/

import {
  RecomendedContainer,
  CardTop,
  CardBottom,
} from '../styles/Recomended.styled'

/* Styled Componenets imports*/
import {
  IconDiv,
  TitleDiv,
  TextDiv,
  Div,
  IconContainer,
} from '../styles/Trending.styled'

//Loader Component
import Loading from '../Loading'

// Context
import { useStateContext } from '../../Context/StateContext'
/* Icons*/
import BookmarkIcon from '../../assets/icon-bookmark-empty.svg'
import MovieIcon from '../../assets/icon-category-movie.svg'
import { BsDot } from 'react-icons/bs'

function RecomendedCard() {
  const { movies } = useStateContext()

  return (
    <RecomendedContainer>
      {movies
        .filter((movie) => movie.isTrending !== true)
        .map((filteredMovie, id) => (
          <RecomendedCard key={id}>
            <CardTop>
              <IconContainer>
                <IconDiv>
                  <BookmarkIcon />
                </IconDiv>
              </IconContainer>
            </CardTop>

            <CardBottom>
              <TextDiv>
                <Div>
                  <p></p>
                  <BsDot />
                </Div>
                <Div>
                  <p> </p>
                  <BsDot />
                </Div>
                <Div>
                  <p>PG</p>
                </Div>
              </TextDiv>

              <TitleDiv>
                <h2>{filteredMovie.title}</h2>
              </TitleDiv>
            </CardBottom>
          </RecomendedCard>
        ))}
    </RecomendedContainer>
  )
}

export default RecomendedCard
