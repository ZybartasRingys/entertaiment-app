import { useAuthContext } from './useAuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { useStateContext } from '../Context/StateContext'

export const useRegisterForm = () => {
  const navigate = useNavigate()
  const { dispatch } = useAuthContext()
  const { errorMsg, setErrorMsg } = useStateContext()

  /**
   * The signup function is an async function that takes in data as a parameter and then uses the axios
   * library to make a post request to the backend server. The response is then logged to the console
   * and the user is redirected to the login page after 3 seconds.
   */
  const signup = async (data) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/user/register',
        data
      )
      console.log(response.data)

      dispatch({ type: 'LOGIN', payload: response.data })
    } catch (error) {
      console.log(error.response)
      if (error) {
        setErrorMsg(error.response)
      }
    }

    /* Redirecting the user to the login page after 3 seconds. */

    setTimeout(() => navigate('/Login'), 3500)
  }

  return { signup }
}
