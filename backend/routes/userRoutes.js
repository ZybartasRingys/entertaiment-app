import express from "express";

const router = express.Router();
import { register } from "../controllers/authController.js";

router.post("/", register);

export default router;
