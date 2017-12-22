## 如何整合 [Redux](http://redux.js.org/index.html)

用Git合并 `feature/redux` 分支.  如果你对 `feature/react-intl` 感兴趣，可以合并该分支，因为它也包含Redux。

**If you don't know Redux well, you should [read about it first](http://redux.js.org/docs/basics/index.html).**


### 创建操作

 1. 转到 `src/constants/index.js` 并在那里定义动作名称.

 2. 转到 `src/actions/` 并用适当的名字创建文件。 你可以复制 `src/actions/runtime.js` 作为模板.

 3. 如果你需要异步操作, 使用 [`redux-thunk`](https://github.com/gaearon/redux-thunk#readme).
    有关如何创建异步操作的启示，您可以查看 `feature/react-intl` 中的[`redux-thunk`](https://github.com/gaearon/redux-thunk#readme)动作.
    见 [Async Flow](http://redux.js.org/docs/advanced/AsyncFlow.html) 更多信息与话题.


### Creating Reducer (aka Store)

 1. 去 [`src/reducers/`](https://github.com/kriasoft/react-starter-kit/tree/feature/redux/src/reducers) 并在那里创建新的文件.

    你可以复制 [`src/reducers/runtime.js`](https://github.com/kriasoft/react-starter-kit/tree/feature/redux/src/reducers/runtime.js) 做为模版.

    - 不要忘记总是需要 return `state`.
    - 从来没有发生变化提供 `state`.
      如果你改变状态，连接组件的渲染将不会被触发，因为等于`===` .
      如果执行状态更新，则始终返回新值.
      你可以使用这个构造: `{ ...state, updatedKey: action.payload.value, }`
    - 请记住，存储状态*必须*是可重复的通过它重放动作.
      例如，当你存储时间戳时，将它传递给* action payload *.
      如果您调用REST API, 请执行此操作. *不要在reduc111er中做这个!*

 2. Edit [`src/reducers/index.js`](https://github.com/kriasoft/react-starter-kit/tree/feature/redux/src/reducers/index.js), import your reducer and add it to root reducer created by
 [`combineReducers`](http://redux.js.org/docs/api/combineReducers.html)


### Connecting Components

You can use [`connect()`](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) High-Order Component from [`react-redux`](https://github.com/reactjs/react-redux#readme) package.

See [Usage With React](http://redux.js.org/docs/basics/UsageWithReact.html) on redux.js.org.

For an example you can look at
[`<LanguageSwitcher>`](https://github.com/kriasoft/react-starter-kit/blob/feature/react-intl/src/components/LanguageSwitcher/LanguageSwitcher.js)
component from `feature/react-intl` branch. It demonstrates both subscribing to store and dispatching actions.


### Dispatching Actions On Server

See source of `src/server.js`
