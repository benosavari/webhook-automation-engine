import jwt from "jsonwebtoken";

const token = jwt.sign({ user: "test" }, process.env.JWT_SECRET);
console.log(token);