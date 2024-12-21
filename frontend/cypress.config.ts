import { defineConfig } from "cypress";
import { devServer } from "@cypress/vite-dev-server";
import preprocessor from "@badeball/cypress-cucumber-preprocessor";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4000",
    supportFile: false,
    video: false,
    specPattern: "cypress/e2e/**/*.feature",
    setupNodeEvents(on, config) {
      // Add Cucumber preprocessor plugin
      preprocessor.addCucumberPreprocessorPlugin(on, config);

      // Use Vite as the dev server
      on("dev-server:start", async (options) => {
        return devServer({ framework: "react", viteConfig: {}, ...options });
      });

      return config;
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
