import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import PracticeLogList from "./components/PracticeLogList";
import AddPracticeLogForm from "./components/AddPracticeLogForm";
import { PracticeLog } from "./types";
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

  return (
    <div>
      <Header studentName="Jonas Hultberg" />

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>Välkommen till din övningsdagbok!</p>
        {message && <p style={{ color: "green" }}>{message}</p>}
      </div>

      <div>
        <AddPracticeLogForm onAddLog={handleAddLog} />
        <PracticeLogList logs={logs} />
      </div>
    </div>
  );
};

export default App;
