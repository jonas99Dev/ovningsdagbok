import React from "react";
import { mount } from "cypress/react18"; // För att montera komponenten
import Header from "../../src/components/Header"; // Justera sökvägen efter ditt projekt

describe("Header Component", () => {
  it("ska visa rubrik, dagens datum och elevens namn", () => {
    const studentName = "Jonas Hultberg";

    // Rendera Header-komponenten
    mount(<Header studentName={studentName} />);

    // Kontrollera att rubriken visas
    cy.contains("h1", "Övningsdagbok");

    // Kontrollera att dagens datum visas
    const today = new Date().toLocaleDateString("sv-SE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    cy.contains("p", today);

    // Kontrollera att elevens namn visas
    cy.contains("p", `Elev: ${studentName}`);
  });
});
