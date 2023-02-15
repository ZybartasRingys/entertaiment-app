import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// @desc    Register new User
// @route   post api/user/
// @access  Public

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

// @desc    Login
// @route   post /api/user
// @access  Public

export const login = async (req, res) => {
  try {
    /* Finding the user in the database. */
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) console.log("no user found");
    /* Comparing the password that the user entered with the password that is stored in the database. */
    const isPwdCorrect = await bcrypt.compare(req.body.password, user.password);
    /* Checking if the password is correct. If it is not correct, it will return an error. */
    if (!isPwdCorrect) console.log("wrong email of password");

    /* Creating a token for the user. */
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json("logged in");
  } catch (error) {
    console.log(error.message);
  }
};
