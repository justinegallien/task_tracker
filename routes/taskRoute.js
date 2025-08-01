import express from "express";
import { validateToken } from "../middleware/authMiddleware.js";
export const task = express.Router();

import {
  getTask,
  getTaskPerUser,
  deleteTask,
  postTask,
  putTask,
} from "../controllers/taskController.js";

task.get("/task/", validateToken, getTask);
task.get("/task/:employee_id", validateToken, getTaskPerUser);
task.post("/task/", validateToken, postTask);
task.delete("/task/:task_id", validateToken, deleteTask);
task.put("/task/:task_id", validateToken, putTask);
