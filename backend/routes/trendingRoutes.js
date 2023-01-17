import express from "express";

const router = express.Router();
import { getTrending } from "../controllers/trendingController.js";

router.get("/", getTrending);

export default router;
