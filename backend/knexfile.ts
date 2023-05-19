const settings = {
  client: "postgresql",
  connection: {
    port: Number(process.env.DATABASE_PORT || 5432),
    host: process.env.DATABASE_HOST || "127.0.0.1",
    database: process.env.DATABASE_DBNAME || "tegrafood",
    user: process.env.DATABASE_USER || "my_user",
    password: process.env.DATABASE_PASSWORD || "1234",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};

const config = {
  development: settings,
  production: settings,
};

module.exports = config;
