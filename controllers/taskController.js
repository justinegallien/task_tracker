import { pool } from "../db/cn.js";

export const getTask = async (req, res) => {
  const sql = `select a.task_id, 
                        a.employee_id, 
                        b.name as employee_name, 
                        a.description,
                        a.status
                from task_tracker.tasks a 
                inner join task_tracker.employee b on a.employee_id = b.employee_id`;
  const result = await pool.query(sql);
  return res.json(result.rows);
};

export const postTask = async (req, res) => {
  const sql = `insert into task_tracker.tasks (description, status, employee_id) values ($1, $2, $3)`;
  const body = req.body;
  const parameter = [body.description, body.status, body.employee_id];
  const result = await pool.query(sql, parameter);
  return res.json({ message: "Object Created" });
};

export const deleteTask = async (req, res) => {
  const sql = `delete from task_tracker.tasks where task_id = $1`;
  const task_id = req.params.task_id;
  const parameter = [task_id];
  const result = await pool.query(sql, parameter);
  return res.json({ message: "Object removed" });
};

export const putTask = async (req, res) => {
  const sql = `update task_tracker.tasks 
                        set description = $1, 
                        status = $2
                            employee_id = $3
                    where task_id = $4`;

  const body = req.body;

  const task_id = req.params.task_id;
  const parameter = [body.description, body.status, body.employee_id, task_id];
  const result = await pool.query(sql, parameter);
  return res.json({ message: "Object Updated" });
};
