const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { toUpper } = require("lodash");

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = !isProduction;

const pathResolve = (dir) => path.resolve(__dirname, dir);

const commonCssRule = [
  // extracts loaded styles into separate files for production
  // Loads the style sheet in the DOM when developing
  isProduction ? MiniCssExtractPlugin.loader : "style-loader",
  {
    // loads CSS files as modules
    loader: "css-loader?url=false",
    options: {
      modules: false,
      esModule: true,
      importLoaders: 1,
    },
  },
  // "postcss-loader",
];

const cssRule = {
  test: /\.css$/,
  use: [...commonCssRule],
};

const lessCssRule = {
  // install less , less-loader
  test: /\.less$/,
  use: [...commonCssRule, "less-loader"],
};

const imageInCssRule = {
  test: /\.(png|jpe?g|gif)$/,
  // install url-loader, file-loader
  // not load the images in html file
  loader: "url-loader",
  options: {
    limit: 8 * 1024,
    esModule: false, // use commonJs
    name: "[contenthash:8].[ext]",
    outputPath: "assets/images",
  },
};

const imageInHtmlRule = {
  test: /\.html$/,
  // loader: 'html-loader', // use commonJs
  use: [
    {
      loader: "html-loader",
      // loader: "html-loader?attrs[]=img:src&attrs[]=source:srcset",
      options: {
        esModule: false,
        // sources: true,
      },
    },
  ],
};

const jsRule = {
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-react", "@babel/preset-env"],
    },
  },
};

// 5 others
const otherFilesRule = {
  exclude: /\.(css|less|js|ts|html|json|jpg|png|ico)$/,
  use: [
    {
      loader: "file-loader",
      options: {
        name: "[name].[contenthash:8].[ext]",
        outputPath: "assets/fonts/",
      },
    },
  ],
};

let config = {
  entry: "./src/App.js",
  devtool: isDevelopment ? "eval-source-map" : "cheap-source-map",
  mode: isProduction ? "production" : "development",
  output: {
    filename: "assets/js/[name].[contenthash:8].js",
    path: pathResolve("./docs"),
    publicPath: "/",
    assetModuleFilename: "assets/images/[hash][ext][query]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: pathResolve("./public/index.html"),
      favicon: pathResolve("./public/favicon.ico"),
      inject: true,
    }),
    isProduction && new CleanWebpackPlugin(),
    isProduction &&
      new MiniCssExtractPlugin({
        filename: "assets/css/styles.[chunkhash].css",
      }),
  ].filter(Boolean),
  module: {
    rules: [
      lessCssRule,
      cssRule,
      imageInCssRule,
      imageInHtmlRule,
      jsRule,
      otherFilesRule,
    ],
  },
  devServer: {
    contentBase: pathResolve("docs"),
    port: 3088,
    // open: true,
    historyApiFallback: true,
    compress: true,
    overlay: true,
    hot: true,
  },
  optimization: {
    minimizer: [
      // 配置生产环境的压缩方案：js/css
      new TerserWebpackPlugin(),
      new CssMinimizerPlugin(),
    ],
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
    splitChunks: {
      chunks: "all",
    },
  },
};

module.exports = config;
