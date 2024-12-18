// Frontend: types.ts

export interface PracticeLog {
  id: number; // ID genereras av backend och används endast vid rendering
  date: string; // Datum som sträng (JSON-format)
  duration: number; // Längd på övningen i minuter
  category: string; // Kategori som "Teknik" eller "Stycke"
  description?: string; // Valfri beskrivning
}

export interface AddPracticeLog {
  date: string; // Datum som sträng (JSON-format)
  duration: number;
  category: string;
  description?: string; // Valfri beskrivning
}

export interface ApiResponse<T> {
  status: "success" | "error";
  data: T;
  message?: string; // Valfritt meddelande
}
