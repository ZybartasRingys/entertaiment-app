import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useRegisterForm = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();
  const signup = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/user/register",
        data
      );
      console.log(response.data);

      dispatch({ type: "LOGIN", payload: response.data });
    } catch (error) {
      console.log(error.message);
    }

    /* Redirecting the user to the login page after 3 seconds. */
    setTimeout(() => navigate("/Login"), 3500);
  };

  return { signup };
};
