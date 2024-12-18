import React, { useState } from "react";
import Header from "./components/Header";
import PracticeLogList from "./components/PracticeLogList";
import AddPracticeLogForm from "./components/AddPracticeLogForm";
// import { PracticeLog } from "./types";
import { PracticeLog } from "../../src/shared/types";
import "./App.css";

interface PracticeLogListProps {
  logs: PracticeLog[];
}

const App: React.FC = () => {
  const [logs, setLogs] = useState<PracticeLog[]>([]);

  const handleAddLog = (log: PracticeLog) => {
    setLogs((prevLogs) => [...prevLogs, log]);
  };
  return (
    <div>
      {/* Header innehåller redan sidhuvudet */}
      <Header studentName="Jonas Hultberg" />

      {/* Här kan du lägga till annan funktionalitet */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>Välkommen till din övningsdagbok!</p>
      </div>
      <div>
        <AddPracticeLogForm onAddLog={handleAddLog} />
        <PracticeLogList logs={logs} />
      </div>
    </div>
  );
};

export default App;
