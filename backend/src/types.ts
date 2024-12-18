import { Request } from "express";

// Utökar Express.Request för att inkludera en user-egenskap
declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

// Representerar en användare
export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date; // När användaren skapades
}

// Representerar en övningslogg
export interface PracticeLog {
  id: number;
  userId: number;
  duration: number;
  category: string;
  description?: string;
  date: string; // String för JSON-kompatibilitet
}

// Generisk API-respons
export interface ApiResponse<T> {
  status: string; // "success" eller "error"
  data: T; // Generisk typ för data
  message?: string; // Valfri meddelandesträng
}

// Exempel på användning av ApiResponse
const response: ApiResponse<PracticeLog[]> = {
  status: "success",
  data: [
    {
      id: 1,
      userId: 1,
      duration: 30,
      category: "Teknik",
      date: new Date().toISOString(), // Datum som sträng
    },
  ],
};

// Request för att skapa en ny övningslogg
export interface CreatePracticeLogRequest {
  userId: number;
  duration: number;
  category: string;
  description?: string;
  date: string; // String istället för Date
}
