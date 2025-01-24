import { resolve } from "node:path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    assetsInlineLimit: 0,
    outDir: "docs",
  },
  resolve: {
    alias: {
      src: resolve(__dirname, "src"),
    },
  },
});
