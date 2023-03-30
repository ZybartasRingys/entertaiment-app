/* Context */
import { useAuthContext } from './useAuthContext'

import { Navigate } from 'react-router-dom'
import Bookmarked from '../components/Pages/Bookmarked'

export const ProtectRoutes = () => {
  const { user } = useAuthContext()

  return user?.token ? <Bookmarked /> : <Navigate to='/login' exact />
}
