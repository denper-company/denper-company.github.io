import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const htmlPlugin = () => {
  return {
    name: "html-transform",
    transformIndexHtml(html) {
      return html
        .replace(" crossorigin ", " ")
        .replace(" crossorigin ", ' media="print" ');
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), htmlPlugin()],
  build: {
    outDir: "docs",
    assetsInlineLimit: 0,
  },
});
