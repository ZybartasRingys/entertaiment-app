import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/* Toast */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useRegisterForm = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  /**
   * The signup function is an async function that takes in data as a parameter and then uses the axios
   * library to make a post request to the backend server. The response is then logged to the console
   * and the user is redirected to the login page after 3 seconds.
   */
  const signup = async (data) => {
    try {
      const response = await axios.post(
        "https://entertaiment-backend.onrender.com/user/register",
        data
      );

      toast.success("Account successfully registered! you can login", {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => navigate("/Login"), 3500);
    } catch (error) {
      console.log(error);
      toast.error(`${error.response.data.message}`, {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return { signup };
};
