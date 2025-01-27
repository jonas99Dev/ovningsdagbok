-- Skapa tabellen practice_logs om den inte redan finns
CREATE TABLE IF NOT EXISTS practice_logs (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  duration INTEGER NOT NULL,
  category VARCHAR(255) NOT NULL,
  description TEXT
);

-- Töm tabellen och återställ ID-räknaren
TRUNCATE TABLE practice_logs RESTART IDENTITY;

-- Lägg till övningsloggar med unika ID:n och rätt datumformat
INSERT INTO practice_logs (date, duration, category, description)
VALUES 
  ('2024-12-16', 30, 'Teknik', 'Skalövningar'),
  ('2025-01-10', 45, 'Improvisation', 'Testade att improvisera över en jazzlåt'),
  ('2025-01-24', 45, 'Improvisation', 'Jobbade på improvisationsteknik');

-- Skapa tabellen Instruments om den inte redan finns
CREATE TABLE IF NOT EXISTS Instruments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,  -- Instrumentets namn (t.ex. "saxofon")
  type VARCHAR(255) NOT NULL   -- Typ av instrument (t.ex. "blåsinstrument")
);

-- Töm tabellen och återställ ID-räknaren
TRUNCATE TABLE Instruments RESTART IDENTITY;

-- Lägg till instrument
INSERT INTO Instruments (name, type)
VALUES 
  ('Saxofon', 'Blåsinstrument'),
  ('Trumpet', 'Blåsinstrument'),
  ('Gitarr', 'Stränginstrument');