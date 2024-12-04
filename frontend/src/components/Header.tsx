import React from "react";

interface HeaderProps {
  studentName: string;
}

const Header: React.FC<HeaderProps> = ({ studentName }) => {
  const today = new Date().toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <header style={{ textAlign: "center", marginBottom: "20px" }}>
      <h1>Övningsdagbok</h1>
      <p>{today}</p>
      <p>Elev: {studentName}</p>
    </header>
  );
};
export default Header;
