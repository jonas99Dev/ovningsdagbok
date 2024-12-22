import React from "react";
import { mount } from "cypress/react18";
import PitchButton from "../../src/components/PitchButton";

describe("PitchButton Component", () => {
  it("ska rendera knappen med rätt text", () => {
    mount(<PitchButton />);
    cy.contains("button", "Play Pitch Tone").should("be.visible");
  });

  it("ska trigga ett klickevent när knappen klickas", () => {
    const onClickMock = cy.stub(); // Mockad callback för att testa klick
    mount(<PitchButton onClick={onClickMock} />);
    cy.contains("button", "Play Pitch Tone").click();
    expect(onClickMock).to.have.been.called; // Verifiera att eventet triggas
  });
});
