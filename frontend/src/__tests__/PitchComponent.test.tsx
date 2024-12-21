// JEST

// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import PitchComponent from "../components/PitchComponent";

// // Test för att säkerställa att komponenten renderas korrekt
// describe("PitchComponent", () => {
//   it("ska rendera en knapp för att spela en stämton", () => {
//     render(<PitchComponent />);
//     const button = screen.getByRole("button", { name: /spela stämton/i });
//     expect(button).toBeInTheDocument();
//   });

//   it("ska spela en stämton när knappen klickas", () => {
//     const playToneMock = jest.fn();
//     render(<PitchComponent onPlayTone={playToneMock} />);
//     const button = screen.getByRole("button", { name: /spela stämton/i });
//     fireEvent.click(button);
//     expect(playToneMock).toHaveBeenCalled();
//   });
// });
