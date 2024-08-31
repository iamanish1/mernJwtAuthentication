import express from "express";
import { userAuthentication } from "../controllers/auth.controller.js";
import { userDataGet } from "../controllers/userdataGet.controller.js";
import { userSingin } from "../controllers/userSingin.controller.js";

const authRouter = express.Router();

authRouter.post("/singup", userAuthentication);
authRouter.get("/user", userDataGet);
authRouter.post("/registerUser", userSingin);

export default authRouter;
