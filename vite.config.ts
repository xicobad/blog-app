import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@app": resolve(__dirname, "./src/app"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@features": resolve(__dirname, "./src/features"),
      "@entities": resolve(__dirname, "./src/entities"),
      "@widgets": resolve(__dirname, "./src/widgets"),
      "@shared": resolve(__dirname, "./src/shared"),
      "@processes": resolve(__dirname, "./src/processes"),
    },
  },
});
