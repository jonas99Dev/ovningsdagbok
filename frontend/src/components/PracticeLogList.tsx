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
  onEditLog: (log: PracticeLog) => void;
  onDeleteLog: (id: number) => void; // Ny prop för radering
}

const PracticeLogList: React.FC<PracticeLogListProps> = ({
  logs,
  onEditLog,
  onDeleteLog,
}) => {
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
              <li key={log.id} style={{ marginBottom: "10px" }}>
                <div>
                  <strong>{formattedDate}</strong>: {log.category} i{" "}
                  {log.duration} minuter{" "}
                  {log.description && <em>({log.description})</em>}
                </div>
                <div style={{ marginTop: "5px" }}>
                  <button
                    data-testid={`edit-log-${log.id}`}
                    onClick={() => onEditLog(log)}
                    style={{
                      marginRight: "10px",
                      padding: "5px 10px",
                      backgroundColor: "#f0f0f0",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                    }}
                  >
                    Redigera
                  </button>
                  <button
                    data-testid={`delete-log-${log.id}`}
                    onClick={() => onDeleteLog(log.id)}
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#ff4d4d",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                    }}
                  >
                    Radera
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PracticeLogList;
