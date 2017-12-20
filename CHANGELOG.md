## React Starter Kit Change Log

这个项目的所有显着变化将被记录在这个文件中.

### [Unreleased][unreleased]

- 将`App`组件拆分为`App`设置上下文变量和`Layout`设置应用程序的一般外观（BREAKING CHANGE）
- 升级`history` npm模块到v4.x，更新`Link`组件（BREAKING CHANGE）
- 删除`core / createHistory.js`有利于在`server.js`和`client.js`（BREAKING CHANGE）中初始化一个新的历史实例
- 删除Jade依赖，以基于React的模板: `src/views/index.jade => src/components/Html`
  (BREAKING CHANGE) [#711](https://github.com/kriasoft/react-starter-kit/pull/711)
- 将`isomorphic-style-loader`更新为`v1.0.0`，增加了ES2015 +装饰器的可比性.
  代码，例如`export default withStyles(MyComponent, style1, style2)`必须替换为
  带有样式的style（style1，style2）（MyComponent）`（BREAKING CHANGE）.
- 用Mocha, Chai, Sinon替换Jest.单元测试文件必须从中重命名
  `MyComponent/__test__/MyComponent-test.js` to `MyComponent/MyComponent.test.js` (BREAKING CHANGE).
- 由于工具包中没有包含Flux库，因此请移除`actions`,`stores`文件夹
- 将`server.js`中的`server`变量重命名为`app`
- 集成 [Sequelize](http://docs.sequelizejs.com/) 以使项目与不同类型的数据库兼容
- 重命名`onSetTitle`，`onSetMeta`上下文变量为`setTitle`，`setMeta`
- 将`Content`组件移动到`src/routes/content`
- 将`ErrorPage`组件移动到`src/routes/error`
- 将顶层路由列表移到“src/routes/index”
- 更新路由以使用`universal-router` 库
- 将Babel，ESLint和JSCS配置移至`package.json` [#497](https://github.com/kriasoft/react-starter-kit/pull/497)
- Convert `Feedback`, `Footer`, `Header`, and `Navigation` to functional stateless components
- 将`Feedback`, `Footer`, `Header`, and `Navigation`转换为功能无状态组件
- 将page/screen组件移动到src/routes`文件夹以及它们的路由信息(BREAKING CHANGE). [6553936](https://github.com/kriasoft/react-starter-kit/commit/6553936e693e24a8ac6178f4962af15e0ea87dfd)

### [v0.5.1]
> 2016-03-02

- 删除`Html` React组件以支持已编译的Jade模板(`src/views`) (BREAKING CHANGE). [e188388](https://github.com/kriasoft/react-starter-kit/commit/e188388f87069cdc7d501b385d6b0e46c98fed60)
- 在Node.js/Express应用程序中添加全局错误处理. [e188388](https://github.com/kriasoft/react-starter-kit/commit/e188388f87069cdc7d501b385d6b0e46c98fed60)
- 添加对静态页面的Markdown和HTML的支持. [#469](https://github.com/kriasoft/react-starter-kit/pull/469), [#477](https://github.com/kriasoft/react-starter-kit/pull/477)

### [v0.5.0]
> 2016-02-27

- 用GraphQL (`src/api`) 替换RESTful API端点 (`src/data`)
- 添加一个样本GraphQL端点 [localhost:3000/graphql](https://localhost:3000/graphql)
- 将默认的Node.js服务器端口从`5000`更改为`3000`
- 添加基于JWT的身份验证Cookie (see `src/server.js`)
- 添加Facebook身份验证策略的参考实现 (`src/core/passport.js`)
- 为PostgreSQL添加一个示例数据库客户端实用程序 (`src/core/db.js`)
- 优化使用Browsersync和HMR启动开发服务器的`tools/start.js`脚本
- 将Superagent替换为WHATWG Fetch库
- 重命名 `app.js` to `client.js` (aka client-side code)
- Integrate [CSS Modules](https://github.com/css-modules/css-modules) and
  [isomorphic-style-loader](https://github.com/kriasoft/isomorphic-style-loader)
- Move `DOMUtils.js` to `src/core` folder; remove `src/utils` folder
- 用 [precss](https://github.com/jonathantneal/precss) 替换 [cssnext](http://cssnext.io/) 
- 更新构建自动化脚本以使用普通函数
- 添加对`--release`和`--verbose`标志的支持来构建脚本
- 添加`CHANGELOG.md`文件，其中包含对该项目显着变化的列表

### [v0.4.1]
> 2015-10-04

- Replace React Hot Loader (deprecated) with React Transform
- Replace `index.html` template with `Html` (shell) React component
- Update the deployment script (`tools/deploy.js`), add Git-based deployment example
- Update ESLint and JSCS settings to use AirBnb JavaScript style guide
- Update `docs/how-to-configure-text-editors.md` to cover Atom editor
- Update NPM production and dev dependencies to use the latest versions

[unreleased]: https://github.com/kriasoft/react-starter-kit/compare/v0.5.1...HEAD
[v0.5.1]: https://github.com/kriasoft/react-starter-kit/compare/v0.5.0...v0.5.1
[v0.5.0]: https://github.com/kriasoft/react-starter-kit/compare/v0.4.1...v0.5.0
[v0.4.1]: https://github.com/kriasoft/react-starter-kit/compare/v0.4.0...v0.4.1
