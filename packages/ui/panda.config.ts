import { defineConfig } from "@pandacss/dev";
import { color, typography } from "design-system-setting-tokens";

export default defineConfig({
  preflight: true,
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
  ],
  exclude: [],
  outdir: "styled-system",
  globalVars: {
    extend: {
      "--static-color-static-black": color.black,
      "--static-color-static-white": color.white,
      "--static-color-static-red-800": color.red800,
      "--static-color-static-blue-800": color.blue800,
      "--scale-dimension-font-size-10000": typography.h1.fontSize,
      "--scale-dimension-font-size-9000": typography.h2.fontSize,
    },
  },
});
