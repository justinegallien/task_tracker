import jwt from "jsonwebtoken";
const secret = "hello";

export const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  const newToken = token.replace("Bearer ", "");

  try {
    const result = jwt.verify(newToken, secret);
    next();
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Token not valid", error: err.message });
  }
};
