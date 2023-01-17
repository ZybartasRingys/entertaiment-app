import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import trendingRoutes from "./routes/trendingRoutes.js";

const port = 5000;
const app = express();
dotenv.config();
connectDB();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/trending", trendingRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
