import { Pool, types } from "pg";
import { Product } from "./schemas";

export function getConnectionPool() {
  const pool = new Pool({
    max: 10,
    host: "127.0.0.1",
    port: 5432,
    user: "my_user",
    password: "1234",
    database: "tegrafood",
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 15000,
  });
  return pool;
}
types.setTypeParser(types.builtins.INT8, parseInt);
types.setTypeParser(types.builtins.FLOAT8, parseFloat);
types.setTypeParser(types.builtins.NUMERIC, parseFloat);
const pool = getConnectionPool();

export function getProducts() {
  return pool.query("select * from products").then((products) => products.rows);
}

export function insertProduct(product: Product) {
  return pool
    .query(
      "insert into products (name,description,price,category,image) values ($1, $2, $3, $4, $5) returning id ",
      [
        product.name,
        product.description,
        product.price,
        product.category,
        product.image,
      ]
    )
    .then((products) => products.rows);
}

export function updateProduct(product: Product, id: number) {
  return pool
    .query(
      "update products set name=$1,description=$2,price=$3,category=$4,image=$5 where id=$6",
      [
        product.name,
        product.description,
        product.price,
        product.category,
        product.image,
        id,
      ]
    )
    .then((products) => products.rowCount > 0);
}
