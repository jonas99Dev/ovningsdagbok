import { Router, Request, Response } from "express";
import { PracticeLog } from "../types"; // Kontrollera sökvägen
import pool from "../db";
const router = Router();

let logs: PracticeLog[] = [];

// POST /logs - Lägg till en ny logg
router.post("/", (req: Request, res: Response) => {
  const newLogData = req.body as Omit<PracticeLog, "id">;

  console.log("Request body:", newLogData); // Kontrollera inkommande data

  // Validering av inkommande data
  if (!newLogData.date || !newLogData.duration || !newLogData.category) {
    res.status(400).json({ message: "Invalid data, missing required fields" });
  }

  // Generera en ny logg med unikt ID
  const newLog: PracticeLog = {
    ...newLogData,
    id: logs.length > 0 ? logs[logs.length - 1].id + 1 : 1,
  };

  logs.push(newLog); // Lägg till i listan

  res.status(201).json({ message: "Log added", data: newLog });
});

// GET /logs - Hämta alla loggar
router.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Logs retrieved", data: logs });
});

export default router;
