const path = require("path");

const postCSSPlugins = [
  require("postcss-import"),
  require("autoprefixer"),
  require("postcss-nested"),
  require("postcss-simple-vars"),
  require("postcss-mixins"),
  require("postcss-hexrgba")
];

module.exports = {
  entry: "./app/assets/scripts/App.js", //entry for main js file
  output: {
    // output instead of app/dist/main.js
    filename: "bundeled.js",
    path: path.resolve(__dirname, "app") //webpack requires absolute path
  },
  devServer: {
    // setting for webpack-dev-server
    before: function(app, server) {
      server._watch("./app/**/*.html");
    },
    contentBase: path.join(__dirname, "app"),
    hot: true,
    port: 3300,
    host: "0.0.0.0"
  },
  mode: "development",
  module: {
    //postcss underneath
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader?url=false",
          { loader: "postcss-loader", options: { plugins: postCSSPlugins } }
        ]
      }
    ]
  }
};
