import express from "express";

const router = express.Router();
import {
  getMovies,
  updateMovie,
  getBookmarkedMovies,
} from "../controllers/moviesController.js";

import { requireAuth } from "../middleware/requireAuth.js";

router.get("/", getMovies);
router.get("/bookmarked", requireAuth, getBookmarkedMovies);
router.put("/:id", requireAuth, updateMovie);

export default router;
