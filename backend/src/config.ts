export const config = {
  database: {
    max: 10,
    host: process.env.DATABASE_HOST || "127.0.0.1",
    port: Number(process.env.DATABASE_PORT || "5432"),
    user: process.env.DATABASE_USER || "my_user",
    password: process.env.DATABASE_PASSWORD || "1234",
    database: process.env.DATABASE_DBNAME || "tegrafood",
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 15000,
  },
};
