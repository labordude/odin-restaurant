const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
    home: "./src/home.js",
    cookiemenu: "./src/cookiemenu.js",
    cakemenu: "./src/cakemenu.js",
  },
  devServer: {
    static: "./dist",
    hot: true,
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Crumby Daze Cookies",
      template: "./src/index.html",
    }),
  ],
  output: {
    filename: "[name].main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/i,
        type: "asset/resource",
      },
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
