import express, { Router } from "express";
import { test } from "../controllers/user.controller.js";

const userRouter = express.Router();

// TEST API GET
userRouter.get("/test", test);

// TEST API POST

userRouter.post("/test2", (req, res) => {
  res.json({ message: "API POST request is working" });
});

export default userRouter;
