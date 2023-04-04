import React from 'react'

/* Styled components*/
import { CardsSection, CardsContainer } from '../styles/Cards.styled'

/* Context*/
import { useStateContext } from '../../Context/StateContext'
/* Card*/
import TvSeriesCard from '../cards/TvSeriesCard'
/* Loading*/
import Loading from '../Loading'

/* Toast */
import { ToastContainer, toast } from 'react-toastify'

function TvSeries() {
  const { searchResults } = useStateContext()

  /* Filtering the searchResults array and returning only the movies that have a category of TV Series. */
  const filteredTvSeries = searchResults.filter(
    (movie) => movie.category === 'TV Series'
  )

  /* Mapping through the filteredTvSeries array and returning a TvSeriesCard component for each movie in
 the array. */
  const tvSeriesCard = filteredTvSeries.map((movie) => {
    return <TvSeriesCard key={movie._id} movie={movie} />
  })

  return (
    <CardsSection>
      <h1>TV Series</h1>
      <CardsContainer>
        {tvSeriesCard?.length ? tvSeriesCard : <Loading />}
      </CardsContainer>
      <ToastContainer />
    </CardsSection>
  )
}

export default TvSeries
