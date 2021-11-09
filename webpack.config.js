const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
    }),
  ],
};
