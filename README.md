# Musikövningsdagbok

En applikation för att logga musikövningar, byggd med **Express**, **TypeScript**, och kommer att innehålla en **frontend med React** samt **databas med PostgreSQL**.

---

## Daglig logg

## 2024-12-04

    -	Uppdaterade tsconfig.json för att lösa problem med case-sensitivity på filnamn genom att justera include till "src/**/*".
    -	Åtgärdade konflikter mellan Header.tsx och header.tsx genom att säkerställa att PascalCase används konsekvent för komponenter.
    -	Implementerade en Header-komponent i frontend som visar dagens datum, sidrubrik och elevens namn.
    -	Testade frontend-servern och bekräftade att funktionaliteten fungerar korrekt via npm run dev.

### 2024-12-02

- Konfigurerade Express med TypeScript.
- Hanterade problem med portkonflikter, bytte till port 5001.
- Konfigurerade `nodemon` och `ts-node` för utveckling.
- Lärde mig felsöka TypeScript-fel med typer som `NodeJS.ErrnoException`.

### 2024-12-01

- Skapade projektets grundstruktur med separata mappar för `backend` och `frontend`.
- Installerade TypeScript och initierade projekt med `npm init`.
- Konfigurerade `tsconfig.json` för backend och frontend.
- Installerade och testade `nodemon` för automatiska omstarter under utveckling.

---

## Projektbeskrivning

Denna applikation är en digital dagbok för musikstudenter eller musiker som vill hålla koll på sin övning. Användare kommer att kunna:

- Skapa en användare.
- Logga sina övningar med detaljer som datum, kategori, beskrivning och längd.
- Få en översikt av sina loggar över tid.

---

## Funktionalitet

### Backend

- **Teknik:** Node.js, Express, TypeScript.
- Konfigurerad för att hantera API-anrop, t.ex.:
  - POST `/users` - Skapa en ny användare.
  - POST `/logs` - Logga en övning.
  - GET `/logs` - Hämta alla övningsloggar.

### Frontend

- **Teknik (planerad):** Vite, React, TypeScript.
- Komponenter för:
  - Inloggning och registrering.
  - Visning av övningsloggar i ett UI.
  - Formulär för att skapa nya loggar.

### Databas

- **Planerad teknik:** PostgreSQL.
- Tabeller för:
  - **Users:** Hanterar användaruppgifter.
  - **PracticeLogs:** Hanterar loggdata kopplad till användare.

---

## Installation

### Krav

- Node.js och npm installerat.
- PostgreSQL-databas (krävs i framtida steg).

### Steg för att köra projektet

1. Klona repot:
   ```bash
   git clone <repo-url>
   ```

## Status

- [x] Konfigurera backend med Express och TypeScript.
- [x] Ställa in nodemon för utveckling.
- [ ] Skapa frontend med Vite och React.
- [ ] Lägga till databas (PostgreSQL).
