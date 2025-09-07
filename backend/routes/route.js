import express from "express";

import {
  login,
  signup,
  getData,
  logTransaction,
} from "../controllers/controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/info", getData);

router.post("/transaction", logTransaction);

export default router;
