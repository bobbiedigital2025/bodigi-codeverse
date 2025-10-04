import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration for BoDiGi CodeVerse
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
});
