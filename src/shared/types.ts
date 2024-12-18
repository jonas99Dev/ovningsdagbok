export interface PracticeLog {
  id: number; // Unikt ID
  date: string; // Datum som sträng
  duration: number; // Övningens längd
  category: string; // Typ av övning
  description?: string; // Valfri beskrivning
}

export interface AddPracticeLog {
  date: string; // Datum
  duration: number;
  category: string;
  description?: string;
}

export interface ApiResponse<T> {
  status: "success" | "error";
  data: T;
  message?: string; // Valfri meddelandesträng
}
