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

describe("Radera övningslogg", () => {
  it("ska kunna radera en logg och inte visa den i listan", () => {
    // Mocka en logglista
    const mockLogs = [
      {
        id: 1,
        date: "2024-12-18",
        duration: 30,
        category: "Teknik",
        description: "Skalövningar",
      },
      {
        id: 2,
        date: "2024-12-19",
        duration: 45,
        category: "Stycke",
        description: "Jobbade på en etyd.",
      },
    ];

    // Interceptera GET-förfrågan för att leverera mockad data
    cy.intercept("GET", "/logs", {
      statusCode: 200,
      body: { message: "Logs retrieved", data: mockLogs },
    });

    // Besök startsidan
    cy.visit("/");

    // Kontrollera att loggarna visas
    cy.contains("li", "18 december 2024: Teknik i 30 minuter. (Skalövningar)");
    cy.contains(
      "li",
      "19 december 2024: Stycke i 45 minuter. (Jobbade på en etyd.)"
    );

    // Mocka DELETE-förfrågan
    cy.intercept("DELETE", "/logs/1", {
      statusCode: 200,
      body: { message: "Log deleted" },
    });

    // Klicka på radera-knappen för första loggen
    cy.get('[data-testid="delete-log-1"]').click();

    // Kontrollera att loggen inte längre visas i listan
    cy.contains(
      "li",
      "18 december 2024: Teknik i 30 minuter. (Skalövningar)"
    ).should("not.exist");
  });
});
