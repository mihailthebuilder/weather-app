const path = require("path");

module.exports = {
  //dev options
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },

  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: ["./src/common/common.scss"],
            },
          },
        ],
      },

      {
        test: /\.html$/i,
        use: "html-loader",
      },
    ],
  },
};