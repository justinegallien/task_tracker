import express from "express";
import { validateToken } from "../middleware/authValidation.js";
export const employee = express.Router();
import {
  getEmployee,
  postEmployee,
  deleteEmployee,
  putEmployee,
  getEmployeeId,
} from "../controllers/employeeController.js";

employee.get("/employee/", validateToken, getEmployee);
employee.get("/employee/:employee_id", validateToken, getEmployeeId); // return just 1 employee of the table
employee.post("/employee/", validateToken, postEmployee);
employee.delete("/employee/:employee_id", validateToken, deleteEmployee);
employee.put("/employee/:employee_id", validateToken, putEmployee);
