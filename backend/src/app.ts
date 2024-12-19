import express, { Request, Response } from "express";
import cors from "cors";
import usersRouter from "./routes/users";
import logsRouter from "./routes/logs";

const app = express();

console.log("Initializing Express app...");

// Middleware för att hantera JSON
app.use(express.json());
console.log("JSON middleware added");

// Middleware för CORS
app.use(
  cors({
    origin: "http://localhost:4000", // Tillåt endast frontend från denna domän
    methods: ["GET", "POST", "PUT", "DELETE"], // Tillåtna HTTP-metoder
    credentials: true, // Tillåter att cookies skickas med förfrågningar
  })
);
console.log("CORS middleware added");

// Lägg till routers
console.log("Adding logs router at /logs");
app.use("/logs", logsRouter);

console.log("Adding users router at /users");
app.use("/users", usersRouter);

// Test route för root
app.get("/", (_req: Request, res: Response) => {
  console.log("Root route '/' accessed");
  res.send("Hello, world!\n");
});

// Felsökning: Logga inkommande förfrågningar
app.use((req: Request, _res: Response, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

export default app;
