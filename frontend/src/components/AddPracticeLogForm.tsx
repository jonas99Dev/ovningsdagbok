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
  const [duration, setDuration] = useState<number | "">("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!category || !duration) {
      setErrorMessage("Alla obligatoriska fält måste fyllas i!");
      return;
    }

    const log = {
      date: new Date().toISOString().split("T")[0], // dagens datum
      duration: Number(duration),
      category,
      description,
    };

    onAddLog(log);
    setCategory("");
    setDuration("");
    setDescription("");
    setErrorMessage(""); // Töm felmeddelandet
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h2>Lägg till övningslogg</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <div>
        <label>Kategori: </label>
        <input
          name="category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Längd (minuter): </label>
        <input
          name="duration"
          type="number"
          value={duration}
          onChange={(e) =>
            setDuration(e.target.value === "" ? "" : Number(e.target.value))
          }
          required
        />
      </div>
      <div>
        <label>Beskrivning (valfritt): </label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Lägg till</button>
    </form>
  );
};

export default AddPracticeLogForm;
