const path = require("path");

const postCSSPlugins = [
  require("autoprefixer"),
  require("postcss-nested"),
  require("postcss-simple-vars")
];

module.exports = {
  entry: "./app/assets/scripts/App.js", //entry for main js file
  output: {
    // output instead of app/dist/main.js
    filename: "bundeled.js",
    path: path.resolve(__dirname, "app") //webpack requires absolute path
  },
  mode: "development", //
  watch: true, // webpack stays running and re-boundels on save
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          { loader: "postcss-loader", options: { plugins: postCSSPlugins } }
        ]
      }
    ]
  }
};
