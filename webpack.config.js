const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = !isProduction;

const resolve = (dir) => path.resolve(__dirname, dir);

// #region

// 0 jsEslint
const jsEslint = {
  test: /\.(ts|tsx|js|jsx)$/,
  enforce: 'pre',
  exclude: ['/node_modules', '/build'],
  include: path.resolve(__dirname, 'src'),
  use: [
    {
      loader: 'eslint-loader',
      options: {
        fix: true,
      },
    },
  ],
};

// 1 Image
const imageInCssRule = {
  test: /\.(png|jpe?g|gif|svg)$/i,
  // install url-loader, file-loader
  // not load the images in html file
  loader: 'url-loader',
  options: {
    limit: 8 * 1024,
    esModule: false, // use commonJs
    name: '[contenthash:8].[ext]',
    outputPath: 'assets/images',
  },
};

const imageInHtmlRule = {
  test: /\.html$/,
  // loader: 'html-loader', // use commonJs
  use: [
    {
      loader: 'html-loader',
      options: {
        esModule: false,
        // sources: true,
      },
    },
  ],
};

// 2 CSS Rules
const commonCssRule = [
  // extracts loaded styles into separate files for production
  // Loads the style sheet in the DOM when developing
  isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
  {
    // loads CSS files as modules
    loader: 'css-loader?url=false',
    options: {
      modules: true,
      importLoaders: 1,
    },
  },
  'postcss-loader',
];

const cssRule = {
  test: /\.css$/,
  use: [...commonCssRule],
};

const lessCssRule = {
  // install less , less-loader
  test: /\.less$/,
  use: [...commonCssRule, 'less-loader'],
};

// 4 Javascript
const jsBabelRule = {
  test: /\.(ts|tsx|js|jsx)$/,
  exclude: ['/node_modules', '/dist'],
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/react', '@babel/preset-env'],
      cacheDirectory: true,
      cacheCompression: false,
      envName: isProduction ? 'production' : 'development',
    },
  },
};

// 5 others
const otherFilesRule = {
  exclude: /\.(css|less|js|ts|html|json|jpg|png|ico)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[contenthash:8].[ext]',
        outputPath: 'assets/fonts/',
      },
    },
  ],
};

// 6
const workerRule = {
  test: /\.worker\.js$/,
  use: {
    loader: 'worker-loader',
    options: {},
  },
};
// #endregion

module.exports = {
  module: {
    rules: [
      // jsEslint,
      {
        oneOf: [
          imageInCssRule,
          imageInHtmlRule,
          cssRule,
          lessCssRule,
          jsBabelRule,
          otherFilesRule,
          workerRule,
        ],
      },
    ],
  },

  devtool: isDevelopment ? 'eval-source-map' : 'cheap-source-map',

  entry: './src/assets/scripts/App.js',

  output: {
    filename: 'assets/js/[name].[contenthash:8].js',
    path: resolve('/dist'),
    publicPath: '/',
    assetModuleFilename: 'assets/images/[hash][ext][query]',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },

  devServer: {
    contentBase: resolve('dist'),
    port: 3088,
    // open: true,
    historyApiFallback: true,
    compress: true,
    overlay: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles
      template: resolve('./public/index.ejs'),
      favicon: './public/favicon.ico',
      inject: true,
    }),

    // new ForkTsCheckerWebpackPlugin({
    //   async: false,
    //   // Speeds up TypeScript type checking
    //   // and ESLint linting (by moving each to a separate process)
    //   eslint: {
    //     files: './src/**/*.{ts,tsx,js,jsx}',
    //   },
    // }),

    new webpack.HotModuleReplacementPlugin(),

    // new ESLintPlugin( {
    //   extensions: [ 'js', 'jsx', 'ts', 'tsx' ],
    // } ),

    new WorkboxPlugin.GenerateSW({
      swDest: 'service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    }),

    // Only enable in production mode
    isProduction &&
      new MiniCssExtractPlugin({
        filename: 'assets/css/[name].[contenthash:8].css',
        chunkFilename: 'assets/css[name].[contenthash:8].chunk.css',
      }),

    isProduction && new CleanWebpackPlugin(),
  ].filter(Boolean),

  optimization: {
    minimize: isProduction,
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          compress: {
            comparisons: false,
          },
          mangle: {
            safari10: true,
          },
          output: {
            comments: false,
            ascii_only: true,
          },
          warnings: false,
        },
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: 'single',
  },

  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '.temp_cache'),
  },
};
