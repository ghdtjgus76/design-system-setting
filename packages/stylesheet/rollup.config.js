import postcss from "rollup-plugin-postcss";

export default {
  input: "./global.css",
  output: {
    file: "./dist/index.css",
  },
  plugins: [
    postcss({
      extract: true,
      minimize: true,
    }),
  ],
};
