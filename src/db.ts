import mysql from "mysql2/promise";

export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "library",
  database: "",
});
