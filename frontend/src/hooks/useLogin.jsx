import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  /**
   * It takes in a data object, sends it to the backend, and then sets the response to localStorage.
   */
  const login = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/user/login",
        data
      );
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({ type: "LOGIN", payload: response.data });
    } catch (error) {
      console.log(error.message);
    }

    setTimeout(() => navigate("/"), 1000);
  };

  return { login };
};
