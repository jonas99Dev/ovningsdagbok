import { Router, Request, Response } from "express";
import { User } from "../types";

const router = Router();

router.post("/", (req: Request<{}, {}, User>, res: Response) => {
  const newUser = req.body; // Typa req.body som User
  res.status(201).json(newUser);
});

export default router;
