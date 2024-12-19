import { Router, Request, Response } from "express";
import { PracticeLog } from "../types"; // Kontrollera sökvägen
import pool from "../db";

const router = Router();

let logs: PracticeLog[] = [];

// POST /logs - Lägg till en ny logg
router.post("/", async (req: Request, res: Response) => {
  const { date, duration, category, description } = req.body;

  console.log("Request body:", req.body); // Kontrollera inkommande data

  // Validering av inkommande data
  if (!date || !duration || !category) {
    res.status(400).json({ message: "Invalid data, missing required fields" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO practice_logs (date, duration, category, description) VALUES ($1, $2, $3, $4) RETURNING *",
      [date, duration, category, description || null]
    );
    res.status(201).json({ message: "Log added", data: result.rows[0] });
  } catch (error) {
    console.error("Error adding log:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/", async (_req: Request, res: Response) => {
  console.log("GET /logs called");
  try {
    // Hämta alla loggar från databasen
    const result = await pool.query("SELECT * FROM practice_logs");

    res.status(200).json({ message: "Logs retrieved", data: result.rows });
  } catch (error) {
    console.error("Error fetching logs:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/test", (_req: Request, res: Response) => {
  res.send("Logs router test works!");
});

export default router;
