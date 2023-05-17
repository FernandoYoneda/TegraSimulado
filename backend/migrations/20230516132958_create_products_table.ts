import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("products", (table) => {
    table.increments("id").primary();
    table.string("name", 50).notNullable();
    table.string("description", 100).nullable();
    table.decimal("price").notNullable();
    table.string("category", 50).notNullable();
    table.text("image").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("products");
}
