import express from "express";

const router = express.Router();
import { getMovies } from "../controllers/moviesController.js";

router.get("/", getMovies);

export default router;
