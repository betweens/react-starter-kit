## 如何使用Sass / SCSS

> **Note**: 推荐使用通过[PostCSS](http://postcss.org/)的普通CSS，因为它减少了项目中使用的技术栈的大小,
强制你学习使用现代CSS 3级以上的功能,从而使您可以完成 Sass/SCSS 通常所做的一切.
另外编译普通的`.css`文件应该比`node-sass`更快地使用`postcss`预处理器。

### Step 1

Install [`node-sass`](https://github.com/sass/node-sass)
(includes [node-gyp](https://github.com/nodejs/node-gyp#readme)
and [prerequisites](https://github.com/nodejs/node-gyp#installation)) and
[`sass-loader`](https://github.com/jtangelder/sass-loader) modules as dev dependencies:

```sh
$ yarn add node-sass --dev
$ yarn add sass-loader --dev
```

### Step 2

更新[`webpack.config.js`](../../tools/webpack.config.js) 文件, 在`.scss`文件中使用`sass-loader`:

```js
const config = {
  ...
  module: {
    rules: [
      ...
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'isomorphic-style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDebug,
              minimize: !isDebug,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './tools/postcss.sass.js',
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      ...
    ]
  }
  ...
}
```

### Step 3

为[PostCSS](https://github.com/postcss/postcss)添加一个配置(`tools/postcss.sass.js`)来启用 [Autoprefixer](https://github.com/postcss/autoprefixer) 为你的`.scss`文件:

```js
module.exports = () => ({
  plugins: [
    require('autoprefixer')(),
  ],
});
```

欲了解更多信息请访问 https://github.com/jtangelder/sass-loader and https://github.com/sass/node-sass
