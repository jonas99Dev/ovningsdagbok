import React, { useState } from "react";
import { AddPracticeLog } from "../../../src/shared/types";

interface AddPracticeLogFormProps {
  onAddLog: (log: AddPracticeLog) => void;
}

const AddPracticeLogForm: React.FC<AddPracticeLogFormProps> = ({
  onAddLog,
}) => {
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h2>Lägg till övningslogg</h2>
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
