import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import PracticeLogList from "./components/PracticeLogList";
import AddPracticeLogForm from "./components/AddPracticeLogForm";
import { PracticeLog } from "./types";
import PitchButton from "./components/PitchButton";
import "./App.css";

const App: React.FC = () => {
  const [logs, setLogs] = useState<PracticeLog[]>([]);
  const [message, setMessage] = useState<string>("");

  // Hämta loggar från backend
  useEffect(() => {
    fetch("http://localhost:5001/logs")
      .then((response) => response.json())
      .then((data) => {
        setLogs(data.data); // Anta att backend returnerar loggar i `data.data`
      })
      .catch((error) => {
        console.error("Error fetching logs:", error);
        setMessage("Kunde inte hämta loggar. Kontrollera servern.");
      });
  }, []);

  const handleAddLog = async (log: Omit<PracticeLog, "id">) => {
    try {
      const response = await fetch("http://localhost:5001/logs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(log),
      });
      const newLog = await response.json();

      if (response.ok) {
        setLogs((prevLogs) => [...prevLogs, newLog.data]);
        setMessage("Loggen har lagts till!");
      } else {
        setMessage(`Fel: ${newLog.message}`);
      }
    } catch (error) {
      console.error("Error adding log:", error);
      setMessage("Kunde inte lägga till loggen. Försök igen.");
    }
  };

  const handleEditLog = async (updatedLog: PracticeLog) => {
    try {
      const response = await fetch(
        `http://localhost:5001/logs/${updatedLog.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedLog),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update log");
      }

      const result = await response.json();

      // Uppdatera state med den redigerade loggen
      setLogs((prevLogs) =>
        prevLogs.map((log) => (log.id === result.data.id ? result.data : log))
      );
      setMessage("Loggen har uppdaterats!");
    } catch (error) {
      console.error("Error updating log:", error);
      setMessage("Kunde inte uppdatera loggen. Försök igen.");
    }
  };

  const handleDeleteLog = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:5001/logs/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete log");
      }

      // Uppdatera state för att ta bort loggen
      setLogs((prevLogs) => prevLogs.filter((log) => log.id !== id));
      setMessage("Loggen har raderats!");
    } catch (error) {
      console.error("Error deleting log:", error);
      setMessage("Kunde inte radera loggen. Försök igen.");
    }
  };

  return (
    <div>
      <Header studentName="Jonas Hultberg" />

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>Välkommen till din övningsdagbok!</p>
        {message && <p style={{ color: "green" }}>{message}</p>}
        <PitchButton />
      </div>

      <div>
        <AddPracticeLogForm onAddLog={handleAddLog} />
        <PracticeLogList
          logs={logs}
          onEditLog={handleEditLog} // Skicka implementeringen av redigering
          onDeleteLog={handleDeleteLog} // Skicka raderingsfunktionen
        />
      </div>
    </div>
  );
};

export default App;
