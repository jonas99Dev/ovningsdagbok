import React from "react";
import { mount } from "cypress/react18";
import PitchButton from "../../src/components/PitchButton";

describe("PitchButton Component", () => {
  it("ska rendera knappen med rätt text", () => {
    mount(<PitchButton />);
    cy.contains("button", "Play Pitch Tone").should("be.visible");
  });

  it("ska visa meddelandet 'Playing pitch tone' när knappen klickas", () => {
    mount(<PitchButton />);
    cy.contains("button", "Play Pitch Tone").click();
    cy.contains("p", "Playing pitch tone").should("be.visible"); // Kontrollera att meddelandet visas
  });
});
