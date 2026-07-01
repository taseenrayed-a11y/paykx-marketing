import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 5000,
    strictPort: false,
    allowedHosts: true,
  },
  preview: {
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 5000,
    allowedHosts: true,
  },
});
