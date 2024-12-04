import express, { Request, Response } from "express";
import cors from "cors";
// import { User } from "./types";
import usersRouter from "./routes/users";
import logsRouter from "./routes/logs";

const app = express();

// Middleware för CORS
// app.use(
//   cors({
//     origin: "http://localhost:3000", // Tillåt endast frontend från denna domän
//     methods: ["GET", "POST", "PUT", "DELETE"], // Tillåtna HTTP-metoder
//     credentials: true, // Tillåter att cookies skickas med förfrågningar
//   })
// ); // Tillåt alla domäner som standard

// Middleware för att hantera JSON
app.use(express.json());

app.use("/logs", logsRouter);
app.use("/users", usersRouter);

// Routes
app.get("/", (_req: Request, res: Response) => {
  res.end("Hello, world!\n");
});

export default app;
