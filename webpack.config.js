const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const buildFolder = "dist/" + (isProd ? "prod" : "dev");
const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    "css-loader",
  ];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };

  if (isProd) {
    config.minimizer = [new CssMinimizerPlugin(), new TerserWebpackPlugin()];
  }

  return config;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: ["@babel/polyfill", "./js/app.js"],
  },
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, buildFolder),
  },
  resolve: {
    extensions: ["css", ".scss", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimization: optimization(),
  devServer: {
    port: 4000,
    hot: isDev,
  },
  devtool: isDev ? "source-map" : false,
  plugins: [
    new HTMLWebpackPlugin({
      title: "Designerti",
      template: "./index.html",
      minify: {
        collapseWhitespace: false,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/img/ava.png"),
          to: path.resolve(__dirname, buildFolder + "/assets/img"),
        },
        {
          from: path.resolve(__dirname, "src/assets/img/logo.svg"),
          to: path.resolve(__dirname, buildFolder + "/assets/img"),
        },
        {
          from: path.resolve(__dirname, "src/assets/img/favicon.png"),
          to: path.resolve(__dirname, buildFolder + "/assets/img"),
        },
        {
          from: path.resolve(__dirname, "src/assets/img/benefits/b1.svg"),
          to: path.resolve(__dirname, buildFolder + "/assets/img/benefits"),
        },
        {
          from: path.resolve(__dirname, "src/assets/img/benefits/b2.svg"),
          to: path.resolve(__dirname, buildFolder + "/assets/img/benefits"),
        },
        {
          from: path.resolve(__dirname, "src/assets/img/benefits/b3.svg"),
          to: path.resolve(__dirname, buildFolder + "/assets/img/benefits"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename("css"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.less$/,
        use: cssLoaders("less-loader"),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders("sass-loader"),
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
