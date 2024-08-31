import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./connectiondb.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.route.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
//Database connection

connectDb();

// ROUTES

app.use("/api", userRouter);
app.use("/api/auth", authRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
