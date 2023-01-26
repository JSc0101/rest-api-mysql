import { createPool } from "mysql2/promise";
import config from "./mysql.config";

export const conecct = async () => {
  const connection = createPool(config);
  return connection;
};
