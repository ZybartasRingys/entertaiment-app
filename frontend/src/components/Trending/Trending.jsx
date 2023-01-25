// Components
import TrendingCard from './TrendingCard'

//Loader Component
import Loading from '../Loading'
/* Styled Componenets imports*/
import { TrendingSection } from '../../components/styles/Trending.styled'
/* Context*/
import { useStateContext } from '../../Context/StateContext'

function Trending() {
  const { loading } = useStateContext()
  return (
    <TrendingSection>
      <h1>Trending</h1>
      {loading ? <Loading /> : <TrendingCard />}
    </TrendingSection>
  )
}

export default Trending
