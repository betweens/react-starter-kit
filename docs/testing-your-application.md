## 测试你的应用程序

### 使用库

RSK附带以下库用于测试目的:

* [Mocha](https://mochajs.org/) - Node.js和浏览器测试运行器
* [Chai](http://chaijs.com/) - 断言库
* [Enzyme](https://github.com/airbnb/enzyme) - 测试React的实用程序

你也可以看看下面的相关软件包:

* [jsdom](https://github.com/tmpvar/jsdom)
* [react-addons-test-utils](https://www.npmjs.com/package/react-addons-test-utils)

### Running tests

要测试你的应用程序，只需运行
[`yarn test`](https://github.com/kriasoft/react-starter-kit/blob/b22b1810461cec9c53eedffe632a3ce70a6b29a3/package.json#L154)
命令将会:

* 递归地在你的`src/`目录下找到所有以`.test.js`结尾的文件
* mocha 执行找到的文件

```bash
yarn test
```

### Conventions

* 测试文件名必须以`test.js`或`yarn test`结尾，否则不能检测它们
* 测试文件名应该以相关组件命名（例如,创建`Login.js组件的`Login.test.js`）

### Basic example

为了帮助您，RSK提供以下[basic test case](https://github.com/kriasoft/react-starter-kit/blob/master/src/components/Layout/Layout.test.js)，您可以将其作为起点:

```js
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../App';
import Layout from './Layout';

describe('Layout', () => {
  it('renders children correctly', () => {
    const wrapper = shallow(
      <App context={{ insertCss: () => {} }}>
        <Layout>
          <div className="child" />
        </Layout>
      </App>,
    );

    expect(wrapper.contains(<div className="child" />)).to.be.true;
  });
});
```

### React-intl exampleß

React-intl用户必须 渲染/打包 IntlProvider中的组件
下面的例子:

下面的例子是RSK`Header`组件的一个嵌入式测试:

```js
import React from 'react';
import Header from './Header';
import IntlProvider from 'react-intl';
import Navigation from '../../components/Navigation';

describe('A test suite for <Header />', () => {
  it('should contain a <Navigation/> component', () => {
    it('rendering', () => {
      const wrapper = renderIntoDocument(
        <IntlProvider locale="en">
          <Header />
        </IntlProvider>,
      );
      expect(wrapper.find(Navigation)).to.have.length(1);
    });
  });
});
```

请注意，不使用IntlProvider将产生以下错误:

> 不变的违规: [React Intl]无法找到所需的`intl`对象.
> 需要在组件父辈中存在<IntlProvider>.

### Linting

为了检查您的JavaScript和CSS代码是否遵循建议的风格
准则运行:

```bash
yarn run lint
```
