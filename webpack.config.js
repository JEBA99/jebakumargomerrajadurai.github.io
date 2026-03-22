const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/jebakumargomerrajadurai.github.io/",
    clean: true,
  },

  devServer: {
    static: [
      {
        directory: path.join(__dirname, "dist"),
      },
      {
        directory: path.join(__dirname, "public"),
        publicPath: "/",
      },
    ],
    port: 3000,
    hot: true,
    historyApiFallback: true,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  resolve: {
    extensions: [".js"],
  },

  mode: "development",
};