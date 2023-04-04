/* eslint-disable no-unused-vars */
// Components
import TrendingCard from './TrendingCard'

/* Styled Components imports */
import { TrendingSection } from '../../components/styles/Trending.styled'
/* Context */

/* react carousel */
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { useStateContext } from '../../Context/StateContext'
function Trending({}) {
  const { searchResults } = useStateContext()

  /* Filtering the searchResults array and returning a new array with only the movies that have the
  isTrending property set to true. */
  const filteredTrendingCard = searchResults.filter(
    (movie) => movie.isTrending === true
  )

  /* Mapping through the filteredTrendingCard array and returning a TrendingCard component for each
  movie in the array. */
  const trendCard = filteredTrendingCard.map((movie) => {
    return <TrendingCard movie={movie} key={movie._id} />
  })

  return (
    <TrendingSection>
      <h1>Trending</h1>
      <Carousel
        className='carousel'
        showArrows={false}
        showThumbs={false}
        centerMode={true}
        centerSlidePercentage={80}
        showIndicators={false}
        showStatus={false}
      >
        {trendCard?.length ? trendCard : null}
      </Carousel>
    </TrendingSection>
  )
}

export default Trending
