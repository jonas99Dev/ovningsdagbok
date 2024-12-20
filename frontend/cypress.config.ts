import { defineConfig } from "cypress";
import vitePreProcessor from "@cypress/vite-dev-server";
// import { defineDevServerConfig } from "@cypress/vite-dev-server";
import viteDevServer from "@cypress/vite-dev-server";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4000",
    supportFile: false,
    video: false,
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
