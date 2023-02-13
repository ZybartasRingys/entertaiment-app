import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    /* Hashing the password. */
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    const hashedComfirmedPass = bcrypt.hashSync(
      req.body.comfirmedPassword,
      salt
    );

    /* Creating a new user object. */
    const newUser = new userModel({
      email: req.body.email,
      password: hashedPassword,
      comfirmedPassword: hashedComfirmedPass,
    });

    /* Saving the new user to the database. */
    await newUser.save();
    res.status(201).json("User has been created");
  } catch (error) {
    console.log(error);
  }
};
