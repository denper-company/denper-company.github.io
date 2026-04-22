import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

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
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
    htmlPlugin(),
  ],
  build: {
    assetsInlineLimit: 0,
    outDir: "docs",
  },
});
