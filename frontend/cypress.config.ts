import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4000",
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: false,
    // @ts-ignore
    stepDefinitions: "cypress/support/step_definitions",
    setupNodeEvents(on, config) {
      // Lägg till Cucumber-plugin
      addCucumberPreprocessorPlugin(on, config);

      // Konfigurera Esbuild
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)], // Använd rätt funktion
        })
      );

      return config;
    },
  },
});
