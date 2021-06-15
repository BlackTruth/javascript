const path = require("path");

const isProduction = process.env.NODE_ENV === "production";

const config = {
  entry: "./src/script.js",
  output: {
    path: path.resolve("./", "build"),
    filename: "scriptES5.js",
  },
  target: "es5",
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  optimization: {
    minimize: true,
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
