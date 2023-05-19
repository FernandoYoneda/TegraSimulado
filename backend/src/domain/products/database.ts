import { Product } from "./schemas";
import pool from "../../database";

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
