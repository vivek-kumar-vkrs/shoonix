const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
console.log('\n ****DEV ENV****', devMode);

const config = {
  target: 'web',
  entry: {
    index: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.cjs.js',
    library: 'shoouix',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
  },
  watchOptions: {
    aggregateTimeout: 600,
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: [/node_modules/, /test/],
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          '@teamsupercell/typings-for-css-modules-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
          // {
          //   loader: "postcss-loader",
          //   options: { plugins: () => [postcssPresetEnv({ stage: 0 })] },
          // },
          {
            loader: 'sass-loader',
            options: { implementation: require('sass') },
          },
        ],
      },
    ],
  },
  plugins: [
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: [
            {
              source: './dist',
              options: {
                force: true,
              },
            },
            {
              source: path.resolve(
                __dirname,
                '../playground/src/component-lib',
              ),
              options: {
                force: true,
              },
            },
          ],
        },
        onEnd: {
          copy: [
            {
              source: path.join(__dirname, './dist'),
              destination: path.resolve(
                __dirname,
                '../playground/src/component-lib',
              ),
            },
          ],
        },
      },
    }),
  ].concat(
    devMode ? [] : [new MiniCssExtractPlugin({ filename: 'shoonix.css' })],
  ),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  // stats: 'summary',
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    // * add some development rules here
  } else if (argv.mode === 'production') {
    // * add some prod rules here
  } else {
    throw new Error('Specify env');
  }

  return config;
};
