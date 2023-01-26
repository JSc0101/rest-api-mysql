import { createPool } from "mysql2/promise";
import config from "./mysql.config";

export const conecct = async () => {
  const connection = createPool(config);
  const data = await connection.query(`SELECT * FROM books`);
  console.log(data)
  return "connection succesfully";
};