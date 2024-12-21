Feature: Play pitch tone button

  Scenario: User sees the pitch tone button
    Given the user visits the "Home" page
    Then the button with text "Play Pitch Tone" should be visible

  Scenario: User clicks the pitch tone button
    Given the user visits the "Home" page
    When the user clicks the button with text "Play Pitch Tone"
    Then the text "Playing pitch tone" should be visible