import express from "express";
const router = express.Router();
import { generateImage } from "../controllers/openaiController";

router.post("/generateimage", generateImage);

export = router