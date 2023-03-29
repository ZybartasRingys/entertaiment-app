import React from 'react'

/* Styled components*/
import { CardsSection, CardsContainer } from '../styles/Cards.styled'

/* Context*/
import { useStateContext } from '../../Context/StateContext'

/* Card import*/
import MovieCard from '../cards/MovieCard'
import Loading from '../Loading'

function Movies() {
  const { searchResults } = useStateContext()

  /* Filtering the search results to only show movies. */
  const filteredMovies = searchResults.filter(
    (movie) => movie.category === 'Movie' && movie.isTrending === false
  )

  /* Mapping through the filteredMovies array and returning a MovieCard component for each movie. */
  const movieCard = filteredMovies.map((movie) => {
    return <MovieCard key={movie._id} movie={movie} />
  })
  return (
    <CardsSection>
      <h1>Movies</h1>
      <CardsContainer>
        {movieCard?.length ? movieCard : <Loading />}
      </CardsContainer>
    </CardsSection>
  )
}

export default Movies
