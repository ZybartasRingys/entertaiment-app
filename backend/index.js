import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";

import getMovies from "./routes/moviesRoutes.js";
import register from "./routes/userRoutes.js";

import { errorHandlerMiddleware } from "./middleware/error-handler.js";

const port = 5000;
const app = express();
dotenv.config();
connectDB();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(errorHandlerMiddleware);

app.use("/movies", getMovies);
app.use("/user", register);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
