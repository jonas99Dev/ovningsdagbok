const BASE_URL = "http://localhost:5001"; // Backendens URL

// Hämta alla loggar
export const getLogs = async () => {
  const response = await fetch(`${BASE_URL}/logs`);
  const data = await response.json();
  return data;
};

// Lägg till en logg
export const addLog = async (log: {
  date: string;
  duration: number;
  category: string;
  description?: string;
}) => {
  const response = await fetch(`${BASE_URL}/logs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(log),
  });
  const data = await response.json();
  return data;
};
