import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
  ],
  exclude: [],
  outdir: "styled-system",
});
