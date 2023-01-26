import { createPool } from "mysql2/promise";

export const connection = async () => {
  const connect = createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "library",
    connectionLimit: 10,
  });
  return connect;
};
