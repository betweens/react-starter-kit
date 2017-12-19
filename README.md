## React初学者工具包 — "[isomorphic](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/)" web app boilerplate &nbsp; <a href="https://github.com/kriasoft/react-starter-kit/stargazers"><img src="https://img.shields.io/github/stars/kriasoft/react-starter-kit.svg?style=social&label=Star&maxAge=3600" height="20"></a> <a href="https://twitter.com/ReactStarter"><img src="https://img.shields.io/twitter/follow/ReactStarter.svg?style=social&label=Follow&maxAge=3600" height="20"></a>

[React Starter Kit](https://www.reactstarterkit.com) is an opinionated boilerplate for web
development built on top of [Node.js](https://nodejs.org/),
[Express](http://expressjs.com/), [GraphQL](http://graphql.org/) and
[React](https://facebook.github.io/react/), containing modern web development
tools such as [Webpack](http://webpack.github.io/), [Babel](http://babeljs.io/)
and [Browsersync](http://www.browsersync.io/). Helping you to stay productive
following the best practices. A solid starting point for both professionals
and newcomers to the industry.

**See** [getting started guide](./docs/getting-started.md), [demo][demo],
[docs](https://github.com/kriasoft/react-starter-kit/tree/master/docs),
[roadmap](https://github.com/kriasoft/react-starter-kit/projects/1) &nbsp;|&nbsp;
**Join** [#react-starter-kit][chat] chat room on Gitter &nbsp;|&nbsp;
**Visit our sponsors**:<br><br>

<p align="center" align="top">
  <a href="https://rollbar.com/?utm_source=reactstartkit(github)&amp;utm_medium=link&amp;utm_campaign=reactstartkit(github)"><img src="https://koistya.github.io/files/rollbar-362x72.png" height="36" align="top" /></a>
  <a href="https://x-team.com/hire-react-developers/?utm_source=reactstarterkit&amp;utm_medium=github-link&amp;utm_campaign=reactstarterkit-june"><img src="https://koistya.github.io/files/xteam-255x72.png" height="36" align="top" /></a>
  <sup><a href="https://x-team.com/join/?utm_source=reactstarterkit&utm_medium=github-link&utm_campaign=reactstarterkit-june">Hiring</a></sup>
</p>


### 入门

  * 按照[getting started guide](./docs/getting-started.md)下载并运行该项目
    ([Node.js](https://nodejs.org/) >= 6.5)
  * 检查这个模版中使用的[code recipes](./docs/recipes)，或分享你的


### 定制

React入门套件的`master`分支不包含Flux实现或任何其他
先进的集成。 不过，我们有一些集成可用于*功能*
您可以将其用作参考或合并到您的项目中的分支：

  * [feature/redux](https://github.com/kriasoft/react-starter-kit/tree/feature/redux) ([PR](https://github.com/kriasoft/react-starter-kit/pull/1084))
    — isomorphic Redux by [Pavel Lang](https://github.com/langpavel)
    (see [how to integrate Redux](./docs/recipes/how-to-integrate-redux.md)) (based on `master`)
  * [feature/apollo](https://github.com/kriasoft/react-starter-kit/tree/feature/apollo) ([PR](https://github.com/kriasoft/react-starter-kit/pull/1147))
    — isomorphic Apollo Client by [Pavel Lang](https://github.com/langpavel)
    (see [Tracking PR #1147](https://github.com/kriasoft/react-starter-kit/pull/1147)) (based on `feature/redux`)
  * [feature/react-intl](https://github.com/kriasoft/react-starter-kit/tree/feature/react-intl) ([PR](https://github.com/kriasoft/react-starter-kit/pull/1135))
    — isomorphic Redux and React Intl by [Pavel Lang](https://github.com/langpavel)
    (see [how to integrate React Intl](./docs/recipes/how-to-integrate-react-intl.md)) (based on `feature/apollo`)

你可以看到最合理的合并组合的状态为[PRs labeled as `TRACKING`](https://github.com/kriasoft/react-starter-kit/labels/TRACKING)

如果您认为这些功能中的任何一个应该放在master上，反之亦然，一些功能应该是这样
从`master`分支中删除,[please let us know](https://gitter.im/kriasoft/react-starter-kit).
欢迎你们提出反馈！

### Comparison

<table width="100%">
  <tr>
    <th>&nbsp;</th>
    <th>
      <p>React Starter Kit</p>
      <a href="https://github.com/kriasoft/react-starter-kit"><img src="https://img.shields.io/github/stars/kriasoft/react-starter-kit.svg?style=social&label=~react-starter-kit" height="20"></a>
      <a href="https://twitter.com/ReactStarter"><img src="https://img.shields.io/twitter/follow/ReactStarter.svg?style=social&label=@ReactStarter" height="20"></a>
    </th>
    <th>
      <p>React Static Boilerplate</p>
      <a href="https://github.com/kriasoft/react-static-boilerplate"><img src="https://img.shields.io/github/stars/kriasoft/react-static-boilerplate.svg?style=social&label=~react-static-boilerplate" height="20"></a>
      <a href="https://twitter.com/ReactStatic"><img src="https://img.shields.io/twitter/follow/ReactStatic.svg?style=social&label=@ReactStatic" height="20"></a>
    </th>
    <th>
      <p>ASP.NET Core Starter Kit</p>
      <a href="https://github.com/kriasoft/aspnet-starter-kit"><img src="https://img.shields.io/github/stars/kriasoft/aspnet-starter-kit.svg?style=social&label=~aspnet-starter-kit" height="20"></a>
      <a href="https://twitter.com/dotnetreact"><img src="https://img.shields.io/twitter/follow/dotnetreact.svg?style=social&label=@dotnetreact" height="20"></a>
    </th>
  <tr>
  <tr>
    <th align="right">App type</th>
    <td align="center"><a href="http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/">同构</a> (universal)</td>
    <td align="center"><a href="https://en.wikipedia.org/wiki/Single-page_application">单页面应用程序</a></td>
    <td align="center"><a href="https://en.wikipedia.org/wiki/Single-page_application">单页面应用程序</a></td>
  </tr>
  <tr>
    <th colspan="4">前端后端</th>
  <tr>
  <tr>
    <th align="right">语言</th>
    <td align="center">JavaScript (ES2015+, JSX)</td>
    <td align="center">JavaScript (ES2015+, JSX)</td>
    <td align="center">JavaScript (ES2015+, JSX)</td>
  </tr>
  <tr>
    <th align="right">库</th>
    <td align="center">
      <a href="https://github.com/facebook/react">React</a>,
      <a href="https://github.com/ReactJSTraining/history">History</a>,
      <a href="https://github.com/kriasoft/universal-router">Universal Router</a>
    </td>
    <td align="center">
      <a href="https://github.com/facebook/react">React</a>,
      <a href="https://github.com/ReactJSTraining/history">History</a>,
      <a href="https://github.com/reactjs/redux">Redux</a>
    </td>
    <td align="center">
      <a href="https://github.com/facebook/react">React</a>,
      <a href="https://github.com/ReactJSTraining/history">History</a>,
      <a href="https://github.com/reactjs/redux">Redux</a>
    </td>
  </tr>
  <tr>
    <th align="right">路由</th>
    <td align="center">Imperative (functional)</td>
    <td align="center">Declarative</td>
    <td align="center">Declarative, cross-stack</td>
  </tr>
  <tr>
    <th colspan="4">后端</th>
  <tr>
  <tr>
    <th align="right">语言</th>
    <td align="center">JavaScript (ES2015+, JSX)</td>
    <td align="center">n/a</td>
    <td align="center">C#, F#</td>
  </tr>
  <tr>
    <th align="right">库</th>
    <td align="center">
      <a href="https://nodejs.org">Node.js</a>,
      <a href="http://expressjs.com/">Express</a>,
      <a href="http://docs.sequelizejs.com/en/latest/">Sequelize</a>,<br>
      <a href="https://github.com/graphql/graphql-js">GraphQL</a></td>
    <td align="center">n/a</td>
    <td align="center">
      <a href="https://docs.asp.net/en/latest/">ASP.NET Core</a>,
      <a href="https://ef.readthedocs.io/en/latest/">EF Core</a>,<br>
      <a href="https://docs.asp.net/en/latest/security/authentication/identity.html">ASP.NET Identity</a>
    </td>
  </tr>
  <tr>
    <th align="right"><a href="https://www.quora.com/What-are-the-tradeoffs-of-client-side-rendering-vs-server-side-rendering">SSR</a></th>
    <td align="center">Yes</td>
    <td align="center">n/a</td>
    <td align="center">n/a</td>
  </tr>
  <tr>
    <th align="right">Data API</th>
    <td align="center"><a href="http://graphql.org/">GraphQL</a></td>
    <td align="center">n/a</td>
    <td align="center"><a href="https://docs.asp.net/en/latest/tutorials/first-web-api.html">Web API</a></td>
  </tr>
</table>


### 支持者

♥ React Starter Kit? 帮助我们通过捐款来支持项目
expenses via [OpenCollective](https://opencollective.com/react-starter-kit) or
[Bountysource](https://salt.bountysource.com/teams/react-starter-kit)!

<a href="http://www.nekst.me/" target="_blank" title="lehneres">
  <img src="https://github.com/lehneres.png?size=64" width="64" height="64" alt="lehneres">
</a>
<a href="http://www.vidpanel.com/" target="_blank" title="Tarkan Anlar">
  <img src="https://github.com/tarkanlar.png?size=64" width="64" height="64" alt="Tarkan Anlar">
</a>
<a href="https://morten.olsen.io/" target="_blank" title="Morten Olsen">
  <img src="https://github.com/mortenolsendk.png?size=64" width="64" height="64" alt="Morten Olsen">
</a>
<a href="https://twitter.com/adamthomann" target="_blank" title="Adam">
  <img src="https://github.com/athomann.png?size=64" width="64" height="64" alt="Adam">
</a>
<a href="http://dsernst.com/" target="_blank" title="David Ernst">
  <img src="https://github.com/dsernst.png?size=64" width="64" height="64" alt="David Ernst">
</a>
<a href="http://zanehitchcox.com/" target="_blank" title="Zane Hitchcox">
  <img src="https://github.com/zwhitchcox.png?size=64" width="64" height="64" alt="Zane Hitchcox">
</a>
<a href="https://opencollective.com/react-starter-kit" target="_blank">
  <img src="https://opencollective.com/static/images/become_backer.svg" width="64" height="64" alt="">
</a>


### 如何贡献

欢迎任何人和每个人[contribute](CONTRIBUTING.md)到这个项目.最好的方法
开始是通过查看我们的[open issues](https://github.com/kriasoft/react-starter-kit/issues),
[submit a new issues](https://github.com/kriasoft/react-starter-kit/issues/new?labels=bug)或
[feature request](https://github.com/kriasoft/react-starter-kit/issues/new?labels=enhancement),
参与讨论,upvote或downvote你喜欢或不喜欢的问题,发送[pull
requests](CONTRIBUTING.md#pull-requests).


### 了解更多

  * [开始使用React.js](http://facebook.github.io/react/)
  * [开始使用GraphQL和Relay](https://quip.com/oLxzA1gTsJsE)
  * [有关StackOverflow的React.js问题](http://stackoverflow.com/questions/tagged/reactjs)
  * [React.js讨论](https://discuss.reactjs.org/)
  * [用于构建用户界面的流量架构](http://facebook.github.io/flux/)
  * [Enzyme - React的JavaScript测试工具](http://airbnb.io/enzyme/)
  * [Flow — JavaScript的静态类型检查器](http://flowtype.org/)
  * [React的未来](https://github.com/reactjs/react-future)
  * [了解学习 ES6](https://babeljs.io/docs/learn-es6/), [ES6 特点](https://github.com/lukehoban/es6features#readme)


### 相关项目

  * [GraphQL入门套件](https://github.com/kriasoft/graphql-starter-kit) — Boilerplate for building data APIs with Node.js, JavaScript (via Babel) and GraphQL
  * [会员资料库](https://github.com/membership/membership.db) — SQL schema boilerplate for user accounts, profiles, roles, and auth claims
  * [Babel入门套件](https://github.com/kriasoft/babel-starter-kit) — Boilerplate for authoring JavaScript/React.js libraries


### 支持

  * [#react-starter-kit](http://stackoverflow.com/questions/tagged/react-starter-kit) on Stack Overflow — Questions and answers
  * [#react-starter-kit](https://gitter.im/kriasoft/react-starter-kit) on Gitter — Watch announcements, share ideas and feedback
  * [GitHub issues](https://github.com/kriasoft/react-starter-kit/issues), or [Scrum board](https://waffle.io/kriasoft/react-starter-kit) — File issues, send feature requests
  * [appear.in/react](https://appear.in/react) — Open hours! Exchange ideas and experiences (React, GraphQL, startups and pet projects)
  * [@koistya](https://twitter.com/koistya) on [Codementor](https://www.codementor.io/koistya), or [Skype](http://hatscripts.com/addskype?koistya) — Private consulting


### 许可证

Copyright © 2014-present Kriasoft, LLC. This source code is licensed under the MIT
license found in the [LICENSE.txt](https://github.com/kriasoft/react-starter-kit/blob/master/LICENSE.txt)
file. The documentation to the project is licensed under the
[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/) license.

---
Made with ♥ by Konstantin Tarkus ([@koistya](https://twitter.com/koistya)) and [contributors](https://github.com/kriasoft/react-starter-kit/graphs/contributors)

[rsk]: https://www.reactstarterkit.com
[demo]: http://demo.reactstarterkit.com
[node]: https://nodejs.org
[chat]: https://gitter.im/kriasoft/react-starter-kit
