import express, { Request, Response } from "express";
import cors from "cors";
// import { User } from "./types";
import usersRouter from "./routes/users";
const app = express();

// Middleware för CORS
app.use(
  cors({
    origin: "http://localhost:3000", // Tillåt endast frontend från denna domän
    methods: ["GET", "POST", "PUT", "DELETE"], // Tillåtna HTTP-metoder
    credentials: true, // Tillåter att cookies skickas med förfrågningar
  })
); // Tillåt alla domäner som standard

app.use("users", usersRouter);

// Middleware för att hantera JSON
app.use(express.json());

// Routes
app.get("/", (_req: Request, res: Response) => {
  res.send("Hello, world!");
});

export default app;
