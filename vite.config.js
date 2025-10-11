import { resolve } from "node:path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

const htmlPlugin = () => {
  return {
    name: "html-transform",
    transformIndexHtml(html) {
      return html
        .replace(
          `type="module" crossorigin`,
          `type="module" crossorigin="anonymous"`,
        )
        .replace(
          `rel="stylesheet" crossorigin`,
          `rel="stylesheet" media="print" crossorigin="anonymous"`,
        );
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
    htmlPlugin(),
  ],
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
