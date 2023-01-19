import TrendingCard from './TrendingCard'
import Loading from '../Loading'

import { TrendingSection } from '../../components/styles/Trending.styled'

import { useStateContext } from '../../Context/StateContext'

function Trending() {
  const { loading } = useStateContext()
  return (
    <TrendingSection>
      {loading ? <Loading /> : <TrendingCard />}
    </TrendingSection>
  )
}

export default Trending
