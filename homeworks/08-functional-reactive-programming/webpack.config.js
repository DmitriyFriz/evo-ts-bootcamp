const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (env, argv) => {
  return {
    mode: argv.mode || "none",
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, "dist"),
    },
    resolve: {
      extensions: [".js", ".ts"],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-typescript"],
              plugins: [["@babel/plugin-transform-runtime"]],
            },
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(jpe?g|png|svg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "img",
                name: "[name].[ext]",
              },
            },
            {
              loader: "image-webpack-loader",
              options: {
                bypassOnDebug: true,
                mozjpeg: {
                  progressive: true,
                  quality: 75,
                },
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: [0.65, 0.9],
                  speed: 4,
                },
                gifsicle: {
                  interlaced: false,
                  optimizationLevel: 1,
                },
                webp: {
                  quality: 75,
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
  };
};
