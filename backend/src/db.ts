import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

// Skapa en pool för att hantera databasanslutningar
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

pool.on("connect", () => {
  console.log("Database connected successfully!");
});

pool.on("error", (err) => {
  console.error("Unexpected database error:", err);
  process.exit(-1);
});

export default pool;
