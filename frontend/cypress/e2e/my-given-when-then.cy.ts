describe("Uppdatera en övningslogg", () => {
  it("ska uppdatera en logg och visa den uppdaterade informationen", () => {
    // Mocka GET-förfrågan
    cy.intercept("GET", "/logs", {
      statusCode: 200,
      body: {
        message: "Logs retrieved",
        data: [
          {
            id: 1,
            date: "2024-12-18T00:00:00.000Z",
            duration: 30,
            category: "Teknik",
            description: "Skalövningar",
          },
        ],
      },
    }).as("getLogs");

    // Mocka PUT-förfrågan
    cy.intercept("PUT", "**/logs/*", {
      statusCode: 200,
      body: {
        message: "Log updated",
        data: {
          id: 1,
          date: "2024-12-18T00:00:00.000Z",
          duration: 40,
          category: "Stycke",
          description: "Jobbade på en etyd.",
        },
      },
    }).as("updateLog");

    cy.visit("/");
    cy.wait("@getLogs");

    // Matcha texten i li, inklusive "RedigeraRadera"
    cy.contains(
      "li",
      /18 december 2024: Teknik i 30 minuter[.]? \(Skalövningar\)( RedigeraRadera)?/
    );

    // Klicka på redigera och fyll i formuläret
    cy.get('[data-testid="edit-log-1"]').click();
    cy.get('input[name="category"]').clear().type("Stycke");
    cy.get('input[name="duration"]').clear().type("40");
    cy.get('textarea[name="description"]').clear().type("Jobbade på en etyd.");
    cy.get('button[type="submit"]').click();

    // Vänta på PUT-förfrågan
    cy.wait("@updateLog");

    // Kontrollera att loggen uppdateras
    cy.contains(
      "li",
      /18 december 2024: Stycke i 40 minuter[.]? \(Jobbade på en etyd.\)( RedigeraRadera)?/
    );
  });
});
