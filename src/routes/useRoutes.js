import express from "express";
import { userLike } from "../controllers/useContronller.js";


const userRouter = express.Router();

userRouter.post("/like", userLike);


export default userRouter;