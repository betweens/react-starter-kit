## 使用Yarn和Webpack作为构建工具

Node.js附带的[Yarn]（https://yarnpkg.com/）命令行实用程序
允许您运行任意脚本和[Node.js modules](https://www.npmjs.com/)
没有他们全局安装. 这很方便, 因为其他你的团队中的开发人员不需要担心有一些工具
在他们可以在你的脚本中执行编译自动化脚本之前全局安项目.

For example, if you need to lint your JavaScript code with [ESLint](http://eslint.org/)
and [JSCS](http://jscs.info/), you just install them as project's dependencies:

例如，如果您需要使用[ESLint](http://eslint.org/)来 lint 您的JavaScript代码,
和[JSCS](http://jscs.info/), 你只要将它们安装为项目的依赖关系即可:

```shell
$ yarn add eslint jscs --dev
```

添加一个新的命令行 `package.json/scripts`:

```json
{
  "devDependencies": {
    "eslint": "^1.10.0",
    "jscs": "^2.7.0"
  },
  "scripts": {
    "lint": "eslint src && jscs src"
  }
}
```

并通过运行来执行它:

```shell
$ yarn run lint        # yarn run <script-name>
```

这与运行`./node_modules/bin/eslint src && ./node_modules/bin/jscs src`相同,
除了前者具有更短的语法并且在所有平台（Mac OS X, Windows, Linux）上以相同的方式工作.

你可以用同样的方式运行[Webpack]（http://webpack.github.io/）模块打包器
将您的应用程序的源代码编译成可分成类的格式.由于Webpack有许多[configuration options](http://webpack.github.io/docs/configuration),
将所有这些文件放在单独的配置文件中是个好主意,而不是将它们作为命令行参数提供给Webpack的CLI.
作为一个经验法则，你想保持你的`package.json`文件中的"scripts"部分足够短，易于阅读

例如，你可能有`src/client.js`和`src/server.js`文件作为你的应用的客户端和服务器端代码的入口点.
可以使用下面的Webpack配置文件 (`webpack.config.js`) 
将它们分别捆绑到客户端和服务器端的应用程序包 - `build/public/client.js`和 `build/server.js`:

```js
module.exports = [{
  context: __dirname + '/src'
  entry: './client.js',
  output: {
    path: __dirname + '/build/public',
    filename: 'client.js'
  }
}, {
  context: __dirname + '/src',
  entry: './server.js',
  output: {
    path: __dirname + '/build',
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  externals: /node_modules/,
}];
```

The `npm` script for it may look like this:

```json
{
  "devDependencies": {
    "webpack": "^1.12.0"
  },
  "scripts": {
    "build": "webpack --config webpack.config.js"
  }
}
```

You can run it as follows:

```shell
$ yarn run build
```
