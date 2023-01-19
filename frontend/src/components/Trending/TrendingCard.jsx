import { useContext } from 'react'
import {
  CardContainer,
  IconDiv,
  TextContainer,
  TitleDiv,
  TextDiv,
  Div,
  IconContainer,
} from '../../components/styles/Trending.styled'

// icons

import { ReactComponent as BookmarkIcon } from '../../assets/icon-bookmark-empty.svg'
import { ReactComponent as MovieIcon } from '../../assets/icon-category-movie.svg'

import { useStateContext } from '../../Context/StateContext'

function TrendingCard() {
  const { loading, setLoading, trending } = useStateContext()

  return (
    <>
      {trending.map((trendingMovie, id) => (
        <CardContainer key={id}>
          <IconContainer>
            <IconDiv>
              <BookmarkIcon />
            </IconDiv>
          </IconContainer>

          <TextContainer>
            <TextDiv>
              <Div>
                <p></p>
              </Div>
              <Div>
                <p></p>
              </Div>
              <Div>
                <p>PG</p>
              </Div>
            </TextDiv>

            <TitleDiv>
              <p>{trendingMovie.title}</p>
            </TitleDiv>
          </TextContainer>
        </CardContainer>
      ))}
    </>
  )
}

export default TrendingCard
