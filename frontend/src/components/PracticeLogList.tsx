import React from "react";

interface PracticeLog {
  id: number;
  date: string;
  duration: number;
  category: string;
  description?: string;
}

// Definiera props-typen för komponenten
interface PracticeLogListProps {
  logs: PracticeLog[];
}

// const logs: PracticeLog[] = [
//   {
//     id: 1,
//     date: "2024-12-01",
//     duration: 45,
//     category: "Teknik",
//     description: "Skalövningar",
//   },
//   {
//     id: 2,
//     date: "2024-12-02",
//     duration: 30,
//     category: "Stycke",
//     description: "Jobbade på en etyd.",
//   },
// ];

const PracticeLogList: React.FC<PracticeLogListProps> = ({ logs }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Övningsloggar</h2>
      <ul>
        {logs.map((log) => (
          <li key={log.id}>
            <strong>{log.date}</strong>: {log.category} i {log.duration}{" "}
            minuter. {log.description && <em>({log.description})</em>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PracticeLogList;
