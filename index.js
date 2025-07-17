import express from "express";
const app = express();
const port = 3000;
import { employee } from "./task_tracker/routes/employeeRoute.js";
import { task } from "./task_tracker/routes/taskRoute.js";

app.use(express.json());

app.use("/api/", employee);
app.use("/api/", task);

app.listen(port, () => {
  console.log(`listening in port ${port}`);
});
