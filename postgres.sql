CREATE TABLE practice_logs (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  duration INTEGER NOT NULL,
  category VARCHAR(255) NOT NULL,
  description TEXT
);

INSERT INTO practice_logs (date, duration, category, description)
VALUES ('2024-12-18', 30, 'Teknik', 'Skalövningar');