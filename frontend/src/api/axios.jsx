import axios from "axios";

export const api = axios.create({ baseURL: "http://localhost:5000/" });

export const registerUser = async () => {
  const response = await api.post(
    "/user",
    {
      email: email,
      password: password,
      comfirmedPassword: comfirmedPassword,
    },
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }
  );

  console.log(response);
};
