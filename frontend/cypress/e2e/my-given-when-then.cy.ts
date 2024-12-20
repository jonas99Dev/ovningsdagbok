describe("Uppdatera en övningslogg", () => {
  it("ska uppdatera en logg och visa den uppdaterade informationen", () => {
    // Given: Det finns en logg som redan är sparad
    cy.intercept("GET", "/logs", {
      statusCode: 200,
      body: {
        message: "Logs retrieved",
        data: [
          {
            id: 1,
            date: "2024-12-18",
            duration: 30,
            category: "Teknik",
            description: "Skalövningar",
          },
        ],
      },
    });

    cy.visit("/"); // Startsidan laddas
    cy.contains("li", "18 december 2024: Teknik i 30 minuter. (Skalövningar)");

    // When: Användaren klickar på redigera och ändrar loggen
    cy.get('[data-testid="edit-log-1"]').click();
    cy.get('input[name="category"]').clear().type("Stycke");
    cy.get('input[name="duration"]').clear().type("40");
    cy.get('textarea[name="description"]').clear().type("Jobbade på en etyd.");
    cy.get('button[type="submit"]').click();

    // Then: Den uppdaterade loggen visas korrekt i listan
    cy.contains(
      "li",
      "18 december 2024: Stycke i 40 minuter. (Jobbade på en etyd.)"
    );
  });
});
