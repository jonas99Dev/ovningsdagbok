describe("Test Driven Development för övningsloggar", () => {
  it("ska visa loggar hämtade från backend", () => {
    // Mocka API-respons
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
          {
            id: 2,
            date: "2024-12-05",
            duration: 30,
            category: "Stycke",
            description: "Etydövning",
          },
        ],
      },
    }).as("getLogs");

    // Besök startsidan
    cy.visit("/");

    // Vänta på att loggar hämtas
    cy.wait("@getLogs");

    // Kontrollera att loggar visas korrekt i listan
    cy.contains("li", "18 december 2024: Teknik i 30 minuter. (Skalövningar)");
    cy.contains("li", "5 december 2024: Stycke i 30 minuter. (Etydövning)");
  });

  it("ska visa ett meddelande när det inte finns några loggar", () => {
    // Mocka API-respons med tom lista
    cy.intercept("GET", "/logs", {
      statusCode: 200,
      body: {
        message: "Logs retrieved",
        data: [],
      },
    }).as("getNoLogs");

    // Besök startsidan
    cy.visit("/");

    // Vänta på att loggar hämtas
    cy.wait("@getNoLogs");

    // Kontrollera att ett meddelande visas
    cy.contains("p", "Inga loggar att visa. Lägg till din första övningslogg!");
  });
});
