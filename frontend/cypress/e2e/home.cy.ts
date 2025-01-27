/// <reference types="cypress" />

import "../support/commands";

describe("Övningsloggar", () => {
  it("ska visa en lista med befintliga loggar", () => {
    cy.intercept("GET", "/logs", {
      statusCode: 200,
      body: {
        message: "Logs retrieved",
        data: [
          {
            id: 1,
            date: "2024-12-15T23:00:00.000Z",
            duration: 30,
            category: "Teknik",
            description: "Skalövningar",
          },
          {
            id: 2,
            date: "2025-01-09T23:00:00.000Z",
            duration: 45,
            category: "Improvisation",
            description: "Testade att improvisera över en jazzlåt",
          },
          {
            id: 3,
            date: "2025-01-23T23:00:00.000Z",
            duration: 45,
            category: "Improvisation",
            description: "Jobbade på improvisationsteknik",
          },
        ],
      },
    }).as("getLogs");

    cy.visit("/");
    cy.wait("@getLogs");

    // Debugga vad som faktiskt renderas
    cy.get("li").each((el: JQuery<HTMLElement>, index: number) => {
      console.log(el.text()); // `el` är nu korrekt typad som en jQuery-element
    });

    // Kontrollera att listan har rätt antal element
    cy.get("li").should("have.length", 3);

    // Kontrollera att loggarna visas korrekt
    cy.contains("li", "16 december 2024: Teknik i 30 minuter (Skalövningar)");
    cy.contains(
      "li",
      "10 januari 2025: Improvisation i 45 minuter (Testade att improvisera över en jazzlåt)"
    );
    cy.contains(
      "li",
      "24 januari 2025: Improvisation i 45 minuter (Jobbade på improvisationsteknik)"
    );
  });

  it("ska visa ett meddelande om inga loggar finns", () => {
    cy.intercept("GET", "/logs", {
      statusCode: 200,
      body: { message: "Logs retrieved", data: [] },
    }).as("getLogs");

    cy.visit("/");
    cy.wait("@getLogs");

    cy.contains("p", "Inga loggar att visa. Lägg till din första övningslogg!");
  });
});
