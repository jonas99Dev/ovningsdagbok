import React, { useState } from "react";

interface AddPracticeLogFormProps {
  onAddLog: (log: {
    date: string;
    duration: number;
    category: string;
    description?: string;
  }) => void;
}

const AddPracticeLogForm: React.FC<AddPracticeLogFormProps> = ({
  onAddLog,
}) => {
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState(0);
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!category || duration <= 0) {
      setError("Kategori och längd måste fyllas i korrekt.");
      return;
    }

    const log = {
      date: new Date().toISOString().split("T")[0], // dagens datum
      duration,
      category,
      description,
    };

    onAddLog(log);

    setCategory("");
    setDuration(0);
    setDescription("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h2>Lägg till övningslogg</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>Kategori: </label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Längd (minuter): </label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label>Beskrivning (valfritt): </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Lägg till</button>
    </form>
  );
};

export default AddPracticeLogForm;
