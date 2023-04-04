import React from 'react'

/* Styled components inputs*/
import { RecommendedSection, RecommendedContainer } from '../styles/Recommended'
/* Card import*/
import Card from './Card'

import Loading from '../Loading'

/* Toast */
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

/* Context*/

import { useStateContext } from '../../Context/StateContext'

function Recommended({}) {
  const { searchResults } = useStateContext()

  /* Filtering out the movies that are trending. */
  const filteredRecommended = searchResults.filter(
    (movie) => movie.isTrending === false
  )

  /* Mapping through the filteredRecommendedMovies array and returning a Card component for each movie. */
  const recommendedCard = filteredRecommended.map((movie, _id) => {
    return <Card movie={movie} key={_id} />
  })

  return (
    <RecommendedSection>
      <h1>Recommended for you</h1>
      <ToastContainer />
      <RecommendedContainer>
        {recommendedCard?.length ? recommendedCard : <Loading />}
      </RecommendedContainer>
    </RecommendedSection>
  )
}

export default Recommended
