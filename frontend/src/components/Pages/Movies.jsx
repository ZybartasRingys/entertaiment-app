import React from 'react'

/* Styled components*/
import { CardsSection, CardsContainer } from '../styles/Cards.styled'

/* Context*/
import { useStateContext } from '../../Context/StateContext'

/* Movie card*/
import MovieCard from '../cards/MovieCard'

function Movies() {
  const { searchResults } = useStateContext()

  /* Filtering the search results to only show movies. */
  const filteredMovies = searchResults.filter(
    (movie) => movie.category === 'Movie'
  )

  /* Mapping through the filteredMovies array and returning a MovieCard component for each movie. */
  const movieCard = filteredMovies.map((movie) => {
    return <MovieCard key={movie._id} movie={movie} />
  })
  return (
    <CardsSection>
      <CardsContainer>
        {movieCard?.length ? movieCard : <p>No movies</p>}
      </CardsContainer>
    </CardsSection>
  )
}

export default Movies
