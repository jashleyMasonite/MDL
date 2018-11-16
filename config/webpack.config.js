/*
 * This is for the module builds in /packages.
 */
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]--[hash:base64:5]"
            }
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: [path.resolve(__dirname, "./../")]
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: "svg-inline-loader"
      }
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   loader: "file-loader",
      //   options: {
      //     name: "[path][name].[ext]",
      //     context: ""
      //   }
      // }
    ]
  },
  externals: ["react", "react-dom"],
  resolve: {
    alias: {
      lib: path.resolve(__dirname, "../lib"),
      components: path.resolve(__dirname, "../components"),
      config: path.resolve(__dirname, "../components"),
      styles: path.resolve(__dirname, "../styles")
    }
  }
};
