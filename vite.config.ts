import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

const configuredBasePath = process.env.VITE_BASE_PATH ?? "/";
const normalizedBasePath = configuredBasePath.endsWith("/")
  ? configuredBasePath
  : `${configuredBasePath}/`;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: normalizedBasePath,
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
