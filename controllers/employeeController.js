import { pool } from "../db/cn.js";

export const getEmployee = async (req, res) => {
  const sql = `select * from task_tracker.employee`;
  const result = await pool.query(sql);
  return res.json(result.rows);
};

export const postEmployee = async (req, res) => {
  const sql = `insert into task_tracker.employee (name, department, role) values ($1, $2, $3)`;
  const body = req.body;
  const parameter = [body.name, body.department, body.role];
  const result = await pool.query(sql, parameter);
  return res.json({ message: "Object Created" });
};

export const deleteEmployee = async (req, res) => {
  const sql = `delete from task_tracker.employee where employee_id = $1`;
  const employee_id = req.params.employee_id;
  const parameter = [employee_id];
  const result = await pool.query(sql, parameter);
  return res.json({ message: "Object removed" });
};

export const putEmployee = async (req, res) => {
  const sql = `update task_tracker.employee 
                        set name = $1, 
                            department = $2,
                            role = $3
                    where employee_id = $4`;

  const body = req.body;

  const employee_id = req.params.employee_id;
  const parameter = [body.name, body.department, body.role, employee_id];
  const result = await pool.query(sql, parameter);
  return res.json({ message: "Object Updated" });
};
