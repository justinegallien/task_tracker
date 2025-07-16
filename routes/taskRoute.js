import express from "express";
export const task = express.Router();

import {
  getTask,
  deleteTask,
  postTask,
  putTask,
} from "../controller/taskController.js";

task.get("/task/", getTask);
task.post("/task/", postTask);
task.delete("/task/:task_id", deleteTask);
task.put("/task/:task_id", putTask);
