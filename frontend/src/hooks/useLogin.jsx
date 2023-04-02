import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/* Toast */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useLogin = () => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  /**
   * It takes in a data object, sends it to the backend, and then sets the response to localStorage.
   */
  const login = async (data) => {
    try {
      const response = await axios.post(
        "https://entertaiment-backend.onrender.com/user/login",
        data
      );

      toast.success("Successfully logged in redirecting to home", {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({ type: "LOGIN", payload: response.data });
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
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
      console.log(error);
    }
  };

  return { login };
};
