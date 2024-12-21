import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user visits the {string} page", (page: string) => {
  if (page === "Home") {
    cy.visit("/");
  }
});

Then(
  "the button with text {string} should be visible",
  (buttonText: string) => {
    cy.contains("button", buttonText).should("be.visible");
  }
);

When("the user clicks the button with text {string}", (buttonText: string) => {
  cy.contains("button", buttonText).click();
});

Then("the text {string} should be visible", (text: string) => {
  cy.contains(text).should("be.visible");
});
