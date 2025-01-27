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
    cy.get("li").then(($li: JQuery<HTMLElement>) => {
      console.log("Renderad text:");
      $li.each((index: number, el: HTMLElement) => {
        console.log(el.innerText);
      });
    });

    cy.contains(
      "li",
      /18 december 2024: Teknik i 30 minuter[.]? \(Skalövningar\)/
    );
    cy.contains(
      "li",
      /5 december 2024: Stycke i 30 minuter[.]? \(Etydövning\)/
    );
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

    // Kontrollera att listan är tom
    cy.get("li").should("not.exist");

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

    // Mocka GET-förfrågan
    cy.intercept("GET", "/logs", {
      statusCode: 200,
      body: { message: "Logs retrieved", data: mockLogs },
    }).as("getLogs");

    // Mocka DELETE-förfrågan
    cy.intercept("DELETE", "/logs/1", {
      statusCode: 200,
      body: { message: "Log deleted" },
    }).as("deleteLog");

    // Besök startsidan
    cy.visit("/");
    cy.wait("@getLogs");

    // Kontrollera att båda loggarna visas
    cy.contains(
      "li",
      /18 december 2024: Teknik i 30 minuter[.]? \(Skalövningar\)/
    );
    cy.contains(
      "li",
      /19 december 2024: Stycke i 45 minuter[.]? \(Jobbade på en etyd.\)/
    );

    // Klicka på radera-knappen för första loggen
    cy.get('[data-testid="delete-log-1"]').click();
    cy.wait("@deleteLog"); // Vänta på att DELETE-förfrågan slutförs

    // Kontrollera att den raderade loggen inte längre finns
    cy.contains(
      "li",
      /18 december 2024: Teknik i 30 minuter[.]? \(Skalövningar\)/
    ).should("not.exist");

    // Kontrollera att den andra loggen fortfarande finns
    cy.contains(
      "li",
      /19 december 2024: Stycke i 45 minuter[.]? \(Jobbade på en etyd.\)/
    ).should("exist");
  });
});
