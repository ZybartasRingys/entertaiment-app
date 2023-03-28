import { useAuthContext } from './useAuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../Context/StateContext'

export const useLogin = () => {
  const { dispatch } = useAuthContext()
  const navigate = useNavigate()

  const { errorMsg, setErrorMsg } = useStateContext()

  /**
   * It takes in a data object, sends it to the backend, and then sets the response to localStorage.
   */
  const login = async (data) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/user/login',
        data
      )

      if (response.status === 200) {
        setErrorMsg('')
        setTimeout(() => navigate('/'), 1500)
      }

      localStorage.setItem('user', JSON.stringify(response.data))
      dispatch({ type: 'LOGIN', payload: response.data })
      console.log(response)
    } catch (error) {
      console.log(error.response.data.message)
      if (error) {
        setErrorMsg(error.response.data.message)
      }
    }
  }

  return { login }
}
