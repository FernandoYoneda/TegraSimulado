import { Pool, types } from "pg";
import { config } from "./config";

export function getConnectionPool() {
  return new Pool(config.database);
}

types.setTypeParser(types.builtins.INT8, parseInt);
types.setTypeParser(types.builtins.FLOAT8, parseFloat);
types.setTypeParser(types.builtins.NUMERIC, parseFloat);

const pool = getConnectionPool();
export default pool;
