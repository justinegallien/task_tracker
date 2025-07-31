import { pool } from "../db/cn.js";
import jwt from "jsonwebtoken";

export const postUser = async (req, res) => {
  const sql = `insert into task_tracker.users
                    (email, password, first_name, last_name )
                    values 
                    ($1, $2, $3, $4)`;

  const { email, password, first_name, last_name } = req.body;

  const parameter = [email, password, first_name, last_name];

  const result = await pool.query(sql, parameter);

  return res.json({ message: "User Created" });
};

export const auth = async (req, res) => {
  const sql = `select email, 
                        first_name, 
                        last_name 
                from task_tracker.users
                where email = $1
                and password = $2`;

  const { email, password } = req.body;

  const result = await pool.query(sql, [email, password]);

  if (result.rowCount === 1) {
    console.log("Auth Pass");
    const payload = result.rows[0];
    const secret = "hello";
    const token = await jwt.sign(payload, secret, { expiresIn: "1h" });
    return res.json({ token });
  } else {
    return res.status(400).json({ message: "Auth Failed!" });
  }
};

// 200 = succes!
// 300 = validation has failed
// 400 = forbidden
// 500 = the operation is wrong
