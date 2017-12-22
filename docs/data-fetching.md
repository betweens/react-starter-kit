## 数据提取

在最低限度，您可能希望使用[HTML5 Fetch API][fetch]作为HTTP客户端
实用程序向[data API server][nodeapi]发出Ajax请求. 这个API是
在除IE以外的所有主流浏览器中都支持（请注意，Edge浏览器不支持Fetch).

** React初学者工具包**预先配置了[`whatwg-fetch`][wfetch] polyfill
对于浏览器环境和[`node-fetch`][nfetch]模块来说
服务器端环境 (see [`src/createFetch.js`](../src/createFetch.js)),
允许你同时使用`fetch(url, options)`方法
客户端和服务器端的代码库

为了避免在使用原始的 `fetch(..)` 函数时需要的样板代码的数量,
创建了一个简单的包装器，它提供了一个基本的URL数据API服务器，证书 (cookies), CORS等.
例如，在浏览器中环境数据API服务器的基本URL可能是一个空字符串, 所以
当你向 `/graphql` 端点发送一个Ajax请求时, 它将被发送给
相同的来源，并在服务器上执行相同的代码.在服务器端渲染期间，它从http://api:8080/graphql服务端获取数据
(`node-fetch`由于显而易见的原因不支持相对URL)

由于 `fetch` 方法在内部工作的细微差别，
把它作为一个 `context` 变量传递给你的React是完全有道理的
应用程序，所以它可以使用从路由级别或从您的内部
按以下步骤反应组分:


#### Route Example

```js
{
  path: '/posts/:id',
  async action({ params, fetch }) {
    const resp = await fetch(`/api/posts/${params.id}`, { method: 'GET' });
    const data = await resp.json();
    return { title: data.title, component: <Post {...data} /> };
  }
}
```

#### React Component

```js
class Post extends React.Component {
  static contextTypes = { fetch: PropTypes.func.isRequired };
  handleDelete = (event) => {
    event.preventDefault();
    const id = event.target.dataset['id'];
    this.context.fetch(`/api/posts/${id}`, { method: 'DELETE' }).then(...);
  };
  render() { ... }
}
```

#### 相关文章

* [That's so fetch!](https://jakearchibald.com/2015/thats-so-fetch/) by
  [Jake Archibald](https://twitter.com/jaffathecake)

[fetch]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
[wfetch]: https://github.com/github/fetchno
[nfetch]: https://github.com/bitinn/node-fetch
[nodeapi]: https://github.com/kriasoft/nodejs-api-starter
