import { mount } from "cypress/react18";
import "./commands";

type Mount = typeof mount;

Cypress.Commands.add("mount", mount);

declare module "cypress" {
  interface Chainable {
    mount: Mount;
  }
}

export {};
