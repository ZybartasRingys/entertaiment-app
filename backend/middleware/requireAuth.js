import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
export const requireAuth = async (req, res, next) => {
  // verify auth
  const { authorization } = req.headers;

  /* Checking if the authorization header is present. If it is not, it returns a 401 error. */
  if (!authorization) {
    return res.status(401).json({ error: "Auth token required" });
  }

  /* Splitting the authorization header into an array and then taking the second element of the array. */
  const token = authorization.split(" ")[1];

  try {
    /* Taking the _id from the token and assigning it to the _id variable. */
    const { _id } = jwt.verify(token, process.env.JWT_SECRET_KEY);

    /* Assigning the user to the request object. */
    req.user = await userModel.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ error: "Request is not authorized" });
  }
};
