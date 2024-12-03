import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date; // När användaren skapades
}

export interface PracticeLog {
  id: number;
  userId: number; // ID för användaren som loggat övningen
  duration: number; // Övningens längd i minuter
  category: string; // T.ex. "Teknik" eller "Stycke"
  description?: string; // Valfri beskrivning
  date: Date; // Datum för övningen
}

export interface ApiResponse<T> {
  status: string; // "success" eller "error"
  data: T; // Generisk typ för data
  message?: string; // Valfri meddelandesträng
}

const response: ApiResponse<PracticeLog[]> = {
  status: "success",
  data: [
    {
      id: 1,
      userId: 1,
      duration: 30,
      category: "Teknik",
      date: new Date(),
    },
  ],
};

export interface CreatePracticeLogRequest {
  userId: number;
  duration: number;
  category: string;
  description?: string;
  date: Date;
}

// om jag ska lägga till autentisering behöver jag utöka request
