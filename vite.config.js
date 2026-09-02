import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

const htmlPlugin = () => ({
  name: "html-transform",
  transformIndexHtml(html) {
    return html.replaceAll(
      `rel="stylesheet"`,
      `rel="stylesheet" media="print"`,
    );
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsInlineLimit: 0,
    outDir: "docs",
  },
  plugins: [
    tailwindcss(),
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
    htmlPlugin(),
  ],
});
