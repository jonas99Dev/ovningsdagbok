/// <reference types="cypress" />

import "../support/commands";

describe("Startsidan", () => {
  it("ska visa sidhuvudet och dagens datum", () => {
    cy.visit("/");
    cy.contains("h1", "Övningsdagbok");
    cy.contains("p", "Jonas Hultberg");

    const today = new Date().toLocaleDateString("sv-SE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    cy.contains("p", today);
  });
});

describe("Övningsloggar", () => {
  it("ska visa en lista med befintliga loggar", () => {
    cy.visit("/");
    cy.contains("li", "18 december 2024: Teknik i 30 minuter. (Skalövningar)");
    cy.contains("li", "5 december 2024: Teknik i 30 minuter. (Övat skalor)");
  });

  it("ska visa ett meddelande om inga loggar finns", () => {
    cy.intercept("GET", "/logs", {
      statusCode: 200,
      body: { message: "Logs retrieved", data: [] },
    });

    cy.visit("/");
    cy.contains("p", "Inga loggar att visa. Lägg till din första övningslogg!");
  });
});

// describe("Lägg till ny övningslogg", () => {
//   it("ska kunna lägga till en ny logg och visa den i listan", () => {
//     cy.visit("/");
//     cy.get('input[name="category"]').type("Improvisation");
//     cy.get('input[name="duration"]').type("45");
//     cy.get('textarea[name="description"]').type(
//       "Testade att improvisera över en jazzlåt."
//     );
//     cy.get('button[type="submit"]').click();
//     cy.contains(
//       "li",
//       "Improvisation i 45 minuter. (Testade att improvisera över en jazzlåt.)"
//     );
//   });

//   it("ska visa ett felmeddelande om formuläret är ofullständigt", () => {
//     cy.visit("/");
//     cy.get('input[name="duration"]').type("20");
//     cy.get('button[type="submit"]').click();
//     cy.contains("p", "Alla obligatoriska fält måste fyllas i!", {
//       timeout: 10000,
//     }).should("be.visible");
//   });
// });

it("ska återställa formuläret efter inlämning", () => {
  cy.visit("/");

  // Fyll i formuläret
  cy.get('input[name="category"]').type("Improvisation");
  cy.get('input[name="duration"]').type("45");
  cy.get('textarea[name="description"]').type(
    "Testade att improvisera över en jazzlåt."
  );

  // Skicka formuläret
  cy.get('button[type="submit"]').click();

  // Kontrollera att formuläret har återställts
  cy.get('input[name="category"]').should("have.value", "");
  cy.get('input[name="duration"]').should("have.value", "");
  cy.get('textarea[name="description"]').should("have.value", "");
});
