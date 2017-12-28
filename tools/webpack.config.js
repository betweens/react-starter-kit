/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import path from 'path';
import webpack from 'webpack';
import AssetsPlugin from 'assets-webpack-plugin';
import nodeExternals from 'webpack-node-externals';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import overrideRules from './lib/overrideRules';
import pkg from '../package.json';

const isDebug = !process.argv.includes('--release');
const isVerbose = process.argv.includes('--verbose');
const isAnalyze =
  process.argv.includes('--analyze') || process.argv.includes('--analyse');

const reScript = /\.(js|jsx|mjs)$/;
const reStyle = /\.(css|less|styl|scss|sass|sss)$/;
const reImage = /\.(bmp|gif|jpg|jpeg|png|svg)$/;
const staticAssetName = isDebug
  ? '[path][name].[ext]?[hash:8]'
  : '[hash:8].[ext]';

// CSS Nano options http://cssnano.co/
const minimizeCssOptions = {
  discardComments: { removeAll: true },
};

//
// 通用配置块用于两者
// 客户端（client.js）和服务器端（server.js) 打包
// -----------------------------------------------------------------------------

const config = {
  context: path.resolve(__dirname, '..'),

  output: {
    path: path.resolve(__dirname, '../build/public/assets'),
    publicPath: '/assets/',
    pathinfo: isVerbose,
    filename: isDebug ? '[name].js' : '[name].[chunkhash:8].js',
    chunkFilename: isDebug
      ? '[name].chunk.js'
      : '[name].[chunkhash:8].chunk.js',
    // Point sourcemap entries to original disk location (format as URL on Windows). T 将源映射条目指向原始磁盘位置（在Windows上格式为URL）
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },

  resolve: {
    // 允许导入的绝对路径，例如 从'components/Button'导入按钮
    // Keep in sync with .flowconfig and .eslintrc
    modules: ['node_modules', 'src'],
  },

  module: {
    // 使缺少的导出出现错误而不是警告
    strictExportPresence: true,

    rules: [
      // Rules for JS / JSX
      {
        test: reScript,
        include: [
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, '../tools'),
        ],
        loader: 'babel-loader',
        options: {
          // https://github.com/babel/babel-loader#options
          cacheDirectory: isDebug,

          // https://babeljs.io/docs/usage/options/
          babelrc: false,
          presets: [
            // A Babel preset that can automatically determine the Babel plugins and polyfills
            // https://github.com/babel/babel-preset-env
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: pkg.browserslist,
                  forceAllTransforms: !isDebug, // for UglifyJS
                },
                modules: false,
                useBuiltIns: false,
                debug: false,
              },
            ],
            // Experimental ECMAScript proposals
            // https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-
            '@babel/preset-stage-2',
            // Flow
            // https://github.com/babel/babel/tree/master/packages/babel-preset-flow
            '@babel/preset-flow',
            // JSX
            // https://github.com/babel/babel/tree/master/packages/babel-preset-react
            ['@babel/preset-react', { development: isDebug }],
          ],
          plugins: [
            // Treat React JSX elements as value types and hoist them to the highest scope
            // https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-constant-elements
            ...(isDebug ? [] : ['@babel/transform-react-constant-elements']),
            // Replaces the React.createElement function with one that is more optimized for production
            // https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-inline-elements
            ...(isDebug ? [] : ['@babel/transform-react-inline-elements']),
            // Remove unnecessary React propTypes from the production build
            // https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types
            ...(isDebug ? [] : ['transform-react-remove-prop-types']),
          ],
        },
      },

      // Rules for Style Sheets
      {
        test: reStyle,
        rules: [
          // Convert CSS into JS module
          {
            issuer: { not: [reStyle] },
            use: 'isomorphic-style-loader',
          },

          // Process external/third-party styles
          {
            exclude: path.resolve(__dirname, '../src'),
            loader: 'css-loader',
            options: {
              sourceMap: isDebug,
              minimize: isDebug ? false : minimizeCssOptions,
            },
          },

          // Process internal/project styles (from src folder)
          {
            include: path.resolve(__dirname, '../src'),
            loader: 'css-loader',
            options: {
              // CSS Loader https://github.com/webpack/css-loader
              importLoaders: 1,
              sourceMap: isDebug,
              // CSS Modules https://github.com/css-modules/css-modules
              modules: true,
              localIdentName: isDebug
                ? '[name]-[local]-[hash:base64:5]'
                : '[hash:base64:5]',
              // CSS Nano http://cssnano.co/
              minimize: isDebug ? false : minimizeCssOptions,
            },
          },

          // Apply PostCSS plugins including autoprefixer
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './tools/postcss.config.js',
              },
            },
          },

          // Compile Less to CSS
          // https://github.com/webpack-contrib/less-loader
          // Install dependencies before uncommenting: yarn add --dev less-loader less
          // {
          //   test: /\.less$/,
          //   loader: 'less-loader',
          // },

          // Compile Sass to CSS
          // https://github.com/webpack-contrib/sass-loader
          // Install dependencies before uncommenting: yarn add --dev sass-loader node-sass
          // {
          //   test: /\.(scss|sass)$/,
          //   loader: 'sass-loader',
          // },
        ],
      },

      // Rules for images
      {
        test: reImage,
        oneOf: [
          // Inline lightweight images into CSS
          {
            issuer: reStyle,
            oneOf: [
              // Inline lightweight SVGs as UTF-8 encoded DataUrl string
              {
                test: /\.svg$/,
                loader: 'svg-url-loader',
                options: {
                  name: staticAssetName,
                  limit: 4096, // 4kb
                },
              },

              // Inline lightweight images as Base64 encoded DataUrl string
              {
                loader: 'url-loader',
                options: {
                  name: staticAssetName,
                  limit: 4096, // 4kb
                },
              },
            ],
          },

          // Or return public URL to image resource
          {
            loader: 'file-loader',
            options: {
              name: staticAssetName,
            },
          },
        ],
      },

      // Convert plain text into JS module
      {
        test: /\.txt$/,
        loader: 'raw-loader',
      },

      // Convert Markdown into HTML
      {
        test: /\.md$/,
        loader: path.resolve(__dirname, './lib/markdown-loader.js'),
      },

      // Return public URL for all assets unless explicitly excluded
      // DO NOT FORGET to update `exclude` list when you adding a new loader
      {
        exclude: [reScript, reStyle, reImage, /\.json$/, /\.txt$/, /\.md$/],
        loader: 'file-loader',
        options: {
          name: staticAssetName,
        },
      },

      // Exclude dev modules from production build
      ...(isDebug
        ? []
        : [
            {
              test: path.resolve(
                __dirname,
                '../node_modules/react-deep-force-update/lib/index.js',
              ),
              loader: 'null-loader',
            },
          ]),
    ],
  },

  // 如果有任何错误，请勿尝试继续.
  bail: !isDebug,

  cache: isDebug,

  // 指定显示哪些束信息
  // 统计选项可以让您精确地控制显示的包信息。 如果您不想使用quiet或noInfo，这可能是一个很好的中间地带，因为您需要一些捆绑信息，但不是全部。
  // https://webpack.js.org/configuration/stats/

  // stats: 'errors-only',有一些预置可用作快捷方式。 像这样使用它们:
  /* 预设                默认             描述 
  *  "errors-only"      none             仅当错误发生时才输出
  *  "minimal"          none             只有在错误或新编译发生时才会输出
  *  "none"             false            什么都不输出
  *  "normal"           true             标准输出
  *  "verbose"          none             输出一切
  * 为了更细化的控制，可以准确地指定你想要的信息。 请注意，此对象中的所有选项都是可选的。
  */
  stats: {
    cached: isVerbose, // 添加关于缓存（未构建）模块的信息
    cachedAssets: isVerbose, // 显示缓存的资产（将其设置为“false”仅显示发出的文件）
    chunks: isVerbose, // 添加块信息（将其设置为“false”允许输出较少的冗余）
    chunkModules: isVerbose, // 将内置的模块信息添加到块信息
    colors: true,
    hash: isVerbose, // 添加编译的hash
    modules: isVerbose, // 添加内置的模块信息
    reasons: isDebug, // 添加有关模块包含的原因的信息
    timings: true, // 添加时间信息
    version: isVerbose, // 添加webpack版本信息
  },

  // Choose a developer tool to enhance debugging
  // https://webpack.js.org/configuration/devtool/#devtool
  devtool: isDebug ? 'cheap-module-inline-source-map' : 'source-map',
};

//
// Configuration for the client-side bundle (client.js)
// -----------------------------------------------------------------------------

const clientConfig = {
  ...config,

  name: 'client',
  target: 'web',

  entry: {
    client: ['@babel/polyfill', './src/client.js'],
  },

  plugins: [
    // Define free variables
    // https://webpack.js.org/plugins/define-plugin/
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
      'process.env.BROWSER': true,
      __DEV__: isDebug,
    }),

    // Emit a file with assets paths
    // https://github.com/sporto/assets-webpack-plugin#options
    new AssetsPlugin({
      path: path.resolve(__dirname, '../build'),
      filename: 'assets.json',
      prettyPrint: true,
    }),

    // Move modules that occur in multiple entry chunks to a new entry chunk (the commons chunk).
    // https://webpack.js.org/plugins/commons-chunk-plugin/

    /* name: string, // or
      names: string[],
      // 公用模块的模块名称。 可以通过传递现有模块的名称来选择现有的模块。
      // 如果传递一个字符串数组，这相当于为每个模块名称多次调用该插件。
      // 如果省略并设置了`options.async`或`options.children`，则使用所有模块，否则使用`options.filename`
      // 被用作模块名称.
      // 当使用`options.async`从其他异步块创建公共块时，你必须指定一个入口点
      // 模块名称在这里，而不是省略`option.name`。

      filename: string,
      // 公用块的文件名模板。 可以包含与`output.filename`相同的占位符.
      // 如果省略，则原始文件名不会被修改（通常是`output.filename`或`output.chunkFilename`）。
      // 如果您也使用`options.async`，则不允许使用此选项，请参阅下面的详细信息。

      minChunks: number|Infinity|function(module, count) -> boolean,
      // 移入公共块之前需要包含模块的最小块数.
      // 该数字必须大于或等于2，并且小于或等于块的数量.
      // 传递“Infinity”只是创建公共块，但不会将模块移入其中.
      // 通过提供一个`function`你可以添加自定义的逻辑。 （默认为块的数量）

      chunks: string[],
      // Select the source chunks by chunk names. The chunk must be a child of the commons chunk.
      // If omitted all entry chunks are selected.

      children: boolean,
      // If `true` 所有普通人的后代都被选中

      deepChildren: boolean,
      // If `true` 所有公共块的后代都被选中

      async: boolean|string,
      // 如果“true”，一个新的异步公共块被创建为`options.name`的子元素和`options.chunks`.
      // 它与`options.chunks`并行加载.
      // 而不是使用`option.filename`，可以通过在这里提供所需的字符串而不是`true`来改变输出文件的名字.

      minSize: number,
      // 创建公共块之前，所有通用模块的最小大小.
    */
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => /node_modules/.test(module.resource),
    }),

    ...(isDebug
      ? []
      : [
          // 减少脚本评估时间
          // https://github.com/webpack/webpack/blob/master/examples/scope-hoisting/README.md
          new webpack.optimize.ModuleConcatenationPlugin(),

          // 最小化块的所有JavaScript输出
          // https://github.com/mishoo/UglifyJS2#compressor-options
          new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: isVerbose,
              unused: true,
              dead_code: true,
              screw_ie8: true,
            },
            mangle: {
              screw_ie8: true,
            },
            output: {
              comments: false,
              screw_ie8: true,
            },
            sourceMap: true,
          }),
        ]),

    // Webpack Bundle Analyzer
    // https://github.com/th0r/webpack-bundle-analyzer
    ...(isAnalyze ? [new BundleAnalyzerPlugin()] : []),
  ],

  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  // https://webpack.js.org/configuration/node/
  // https://github.com/webpack/node-libs-browser/tree/master/mock
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};

//
// Configuration for the server-side bundle (server.js)
// -----------------------------------------------------------------------------

const serverConfig = {
  ...config,

  name: 'server',
  target: 'node',

  entry: {
    server: ['@babel/polyfill', './src/server.js'],
  },

  output: {
    ...config.output,
    path: path.resolve(__dirname, '../build'),
    filename: '[name].js',
    chunkFilename: 'chunks/[name].js',
    libraryTarget: 'commonjs2',
  },

  // Webpack mutates resolve object, so clone it to avoid issues
  // https://github.com/webpack/webpack/issues/4817
  resolve: {
    ...config.resolve,
  },

  module: {
    ...config.module,

    rules: overrideRules(config.module.rules, rule => {
      // Override babel-preset-env configuration for Node.js
      if (rule.loader === 'babel-loader') {
        return {
          ...rule,
          options: {
            ...rule.options,
            presets: rule.options.presets.map(
              preset =>
                preset[0] !== '@babel/preset-env'
                  ? preset
                  : [
                      '@babel/preset-env',
                      {
                        targets: {
                          node: pkg.engines.node.match(/(\d+\.?)+/)[0],
                        },
                        modules: false,
                        useBuiltIns: false,
                        debug: false,
                      },
                    ],
            ),
          },
        };
      }

      // Override paths to static assets
      if (
        rule.loader === 'file-loader' ||
        rule.loader === 'url-loader' ||
        rule.loader === 'svg-url-loader'
      ) {
        return {
          ...rule,
          options: {
            ...rule.options,
            name: `public/assets/${rule.options.name}`,
            publicPath: url => url.replace(/^public/, ''),
          },
        };
      }

      return rule;
    }),
  },

  externals: [
    './assets.json',
    nodeExternals({
      whitelist: [reStyle, reImage],
    }),
  ],

  plugins: [
    // Define free variables
    // https://webpack.js.org/plugins/define-plugin/
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
      'process.env.BROWSER': false,
      __DEV__: isDebug,
    }),

    // Adds a banner to the top of each generated chunk
    // https://webpack.js.org/plugins/banner-plugin/
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
    }),
  ],

  // Do not replace node globals with polyfills
  // https://webpack.js.org/configuration/node/
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
};

export default [clientConfig, serverConfig];
