import express from "express";
export const user = express.Router();
import { postUser, auth } from "../controllers/userController.js";

user.post("/user", postUser);
user.post("/user/auth", auth);
