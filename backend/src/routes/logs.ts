import { Router, Request, Response } from "express";
import { PracticeLog } from "../types";

const router = Router();

router.post("/", (req: Request<{}, {}, PracticeLog>, res: Response) => {
  const newLog = req.body;

  console.log("Request body:", newLog); // Lägg till för att se vad servern tar emot

  if (!newLog) {
    res.status(400).json({ message: "Invalid data" });
  }
  res.status(201).json({ message: "Log added", data: newLog });
});

export default router;
