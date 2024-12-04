import React from "react";
import Header from "./components/Header";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      {/* Header innehåller redan sidhuvudet */}
      <Header studentName="Jonas Hultberg" />

      {/* Här kan du lägga till annan funktionalitet */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>Välkommen till din övningsdagbok!</p>
        {/* Här kan du lägga till fler komponenter, som övningsloggar */}
      </div>
    </div>
  );
};

export default App;
