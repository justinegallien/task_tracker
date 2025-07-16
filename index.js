import express from "express";
const app = express();
const port = 3000;


app.use(express.json());

app.get("/api/employee", async (req, res) => {
  const sql = `select * from task_tracker.employee`;
  const result = await pool.query(sql);
  return res.json(result.rows);
});

app.post("/api/employee", async (req, res) => {
  const sql = `insert into task_tracker.employee (name, department, role) values ($1, $2, $3)`;
  const body = req.body;
  const parameter = [body.name, body.department, body.role];
  const result = await pool.query(sql, parameter);
  return res.json({ message: "Object Created" });

});


app.listen(port, () => {
  console.log(`listening in port ${port}`);
});
