import React from 'react'
import {
  RecomendedSection,
  RecomendedContainer,
} from '../styles/Recomended.styled'
import Card from './Card'

/* Context*/
import { useStateContext } from '../../Context/StateContext'

function Recomended() {
  const { recomended } = useStateContext()

  const recomendedCard = recomended.map((movie) => (
    <Card key={movie._id} movie={movie} />
  ))

  return (
    <RecomendedSection>
      <h1>Recommended for you</h1>
      <RecomendedContainer>{recomendedCard}</RecomendedContainer>
    </RecomendedSection>
  )
}

export default Recomended
