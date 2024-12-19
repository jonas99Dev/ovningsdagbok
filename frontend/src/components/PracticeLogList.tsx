import React from "react";

interface PracticeLog {
  id: number;
  date: string;
  duration: number;
  category: string;
  description?: string;
}

interface PracticeLogListProps {
  logs: PracticeLog[];
}

const PracticeLogList: React.FC<PracticeLogListProps> = ({ logs }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Övningsloggar</h2>
      {logs.length === 0 ? (
        <p>Inga loggar att visa. Lägg till din första övningslogg!</p>
      ) : (
        <ul>
          {logs.map((log) => {
            const formattedDate = new Date(log.date).toLocaleDateString(
              "sv-SE",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            );
            return (
              <li key={log.id}>
                <strong>{formattedDate}</strong>: {log.category} i{" "}
                {log.duration} minuter.{" "}
                {log.description && <em>({log.description})</em>}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PracticeLogList;
