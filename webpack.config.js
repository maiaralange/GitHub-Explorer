const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const environmentConfig = {
  "development": {
    mode: "development",
    devtool: "eval-source-map"
  },
  "production": {
    mode: "production",
    devtool: "source-map"
  }
}; 

module.exports = {
  ...environmentConfig[process.env.NODE_ENV],
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    static: path.resolve(__dirname, "public")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
};