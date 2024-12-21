/// <reference types="cypress" />
/// <reference types="@cypress/react18" />

import { mount } from "cypress/react18";

// Lägg till typdeklarationer för `mount` direkt
declare global {
  interface Cypress {
    mount: typeof mount;
  }
}

// Registrera `mount` som ett Cypress-kommando
Cypress.Commands.add("mount", mount);

export {};
