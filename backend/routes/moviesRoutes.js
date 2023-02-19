import express from "express";

const router = express.Router();
import { getMovies, updateMovie } from "../controllers/moviesController.js";

import { requireAuth } from "../middleware/requireAuth.js";

router.get("/", getMovies);
router.put("/:id", updateMovie);

export default router;
