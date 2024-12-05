describe("Startsidan", () => {
  it("ska visa sidhuvudet och dagens datum", () => {
    // Besök startsidan
    cy.visit("/");

    // Kontrollera att rubriken visas
    cy.contains("h1", "Övningsdagbok");

    // Kontrollera att elevens namn visas
    cy.contains("p", "Jonas Hultberg");

    // Kontrollera att dagens datum visas
    const today = new Date().toLocaleDateString("sv-SE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    cy.contains("p", today);
  });
});
