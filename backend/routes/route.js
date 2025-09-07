import express from "express";

import { login, signup, getData } from "../controllers/controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.get("/info", getData);

export default router;
