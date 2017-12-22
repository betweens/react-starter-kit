## 入门

### 要求

* Mac OS X, Windows, or Linux
* [Yarn](https://yarnpkg.com/) package + [Node.js](https://nodejs.org/) v6.5 or
  newer
* Text editor or IDE pre-configured with React/JSX/Flow/ESlint
  ([learn more](./how-to-configure-text-editors.md))

### 目录结构

在你开始之前，花点时间看看项目结构是怎样的:

```
.
├── /build/                     # 编译输出的文件夹
├── /docs/                      # 项目的文档文件
├── /node_modules/              # 第三方库和实用程序
├── /public/                    # 静态文件被复制到/build/public文件夹中  
├── /src/                       # 应用程序的源代码
│   ├── /components/            # React组件
│   ├── /data/                  # GraphQL服务器模式和数据模型
│   ├── /routes/                # Page/screen 组件以及路由信息
│   ├── /client.js              # 客户端启动脚本
│   ├── /config.js              # 全局应用程序设置
│   ├── /server.js              # 服务器端启动脚本
│   └── ...                     # 其他核心框架模块
├── /test/                      # 单元和端到端测试
├── /tools/                     # 构建自动化脚本和实用程序
│   ├── /lib/                   # 实用程序片段的库
│   ├── /build.js               # 构建从源到输出（build)文件夹的项目
│   ├── /bundle.js              # 通过Webpack将网络资源捆绑到软件包中
│   ├── /clean.js               # 清理输出(build)文件夹
│   ├── /copy.js                # 将静态文件复制到输出(build)文件夹
│   ├── /deploy.js              # 部署您的Web应用程序
│   ├── /postcss.config.js      # 使用PostCSS插件转换样式的配置
│   ├── /run.js                 # 用于运行构建自动化任务的辅助函数
│   ├── /runServer.js           # 启动或重新启动 Node.js服务器
│   ├── /start.js               # 用“live reload”启动开发Web服务器
│   └── /webpack.config.js      # 客户端和服务器端软件包的配置
├── Dockerfile                  # 用于构建用于生产的Docker映像的命令
├── package.json                # 第三方库和实用程序的列表
└── yarn.lock                   # 修复了所有依赖关系的版本
```

**Note**: 当前版本的RSK不包含Flux实现. 它可以很容易地与您选择的任何Flux库集成. 最常见的
使用Flux库是[Flux](http://facebook.github.io/flux/),
[Redux](http://redux.js.org/)和[Relay](http://facebook.github.io/relay/)）

### 快速开始

#### 1. 获取最新版本

您可以先在您的系统上克隆最新版本的React Starter Kit（RSK）
本地机器运行:

```shell
$ git clone -o react-starter-kit -b master --single-branch \
      https://github.com/kriasoft/react-starter-kit.git MyApp
$ cd MyApp
```
或者，您可以从
[WebStorm IDE](https://www.jetbrains.com/help/webstorm/generating-a-project-from-a-framework-template.html#d88767e51)
或者使用
[Yeoman generator](https://www.npmjs.com/package/generator-react-fullstack)
开始基于RSK的新项目.

#### 2. Run `yarn install`

这将安装运行时项目依赖项和列出的开发人员工具
在[package.json](../package.json)文件中.

#### 3. Run `yarn start`

该命令将从源文件(`/src`)构建应用程序到输出中
`/build`文件夹。 一旦最初的构建完成，它将启动
Node.js服务器(`node build/server.js`) 和
[Browsersync](https://browsersync.io/)与
[HMR](https://webpack.github.io/docs/hot-module-replacement)在上面.

> [http://localhost:3000/](http://localhost:3000/) — Node.js server
> (`build/server.js`) with Browsersync and HMR enabled\
> [http://localhost:3000/graphql](http://localhost:3000/graphql) — GraphQL server
> and IDE\
> [http://localhost:3001/](http://localhost:3001/) — Browsersync control panel
> (UI)

现在，您可以在浏览器，移动设备上打开您的网络应用程序,无论何时修改 `/src` 文件夹中的任何源文件，模块
bundler ([Webpack](http://webpack.github.io/))将会重新编译应用程序
并刷新所有连接的浏览器.

![browsersync](https://dl.dropboxusercontent.com/u/16006521/react-starter-kit/brwosersync.jpg)

请注意 `yarn start` 命令在 'development` 模式下启动应用程序
编译的输出文件在这种情况下不会被优化和最小化。 您可以使用
`--release`命令行参数来检查您的应用程序在发行版中的工作方式
(生产)模式:

```shell
$ yarn start -- --release
```

_NOTE: 双破折号是必需的

### 如何建立, 测试, 部署

如果您只需要构建应用程序（无需运行开发服务器）, 只需运行即可:

```shell
$ yarn run build
```

或者，对于生产版本:

```shell
$ yarn run build -- --release
```

或者，对于生产docker构建:

```shell
$ yarn run build -- --release --docker
```

_NOTE: 双破折号是必需的

运行这个命令后, `/build`文件夹将包含编译的
应用程序的版本. 例如, 你可以正常启动Node.js服务器
运行`node build/server.js`.

检查源代码的语法错误和潜在的问题运行:

```shell
$ yarn run lint
```

启动单元测试:

```shell
$ yarn run test          # Run unit tests with Mocha
$ yarn run test:watch    # Launch unit test runner and start watching for changes
```

默认情况下, [Mocha](https://mochajs.org/)测试运行器正在查找测试文件
匹配`src/**/*.test.js`模式. 
`src/components/Layout/Layout.test.js`为例

要部署应用程序，请运行:

```shell
$ yarn run deploy
```

部署脚本 `tools/deploy.js` 被配置为推送内容
`/build` 文件夹通过Git到远程服务器. 您可以轻松部署您的应用程序
至
[Azure Web Apps](https://azure.microsoft.com/en-us/services/app-service/web/),
或者[Heroku](https://www.heroku.com/)这样. 两者都将执行`yarn install--production`
请注意,您只应该部署`/build` 文件夹的内容到远程服务器

### 如何更新

如果您需要通过最近对RSK进行的更改来保持项目的最新状态，
你总是可以从中获取并合并它们
[this repo](https://github.com/kriasoft/react-starter-kit) 回到你自己的
项目运行:

```shell
$ git checkout master
$ git fetch react-starter-kit
$ git merge react-starter-kit/master
$ yarn install
```
