## 如何为React.js配置文本编辑器和IDE [![img](https://img.shields.io/badge/discussion-join-green.svg?style=flat-square)](https://github.com/kriasoft/react-starter-kit/issues/117)

>关于如何配置您最喜爱的文本编辑器或IDE工作的提示和技巧
>与React.js React.js/ES6+/JSX.

### WebStorm

基于** React入门套件模板创建一个新项目**

![react-project-template-in-webstorm](https://dl.dropboxusercontent.com/u/16006521/react-starter-kit/webstorm-new-project.png)

确保在您的项目中启用** JSX **支持. 这是通过设置
默认情况下，如果你创建一个基于React.js模板的新项目.

![jsx-support-in-webstorm](https://dl.dropboxusercontent.com/u/16006521/react-starter-kit/webstorm-jsx.png)

为**自动完成配置JavaScript库**

![javascript-libraries-in-webstorm](https://dl.dropboxusercontent.com/u/16006521/react-starter-kit/webstorm-libraries.png)

Enable **ESLint** support

![eslint-support-in-webstorm](https://dl.dropboxusercontent.com/u/16006521/react-starter-kit/webstorm-eslint.png)

按照说明启用** CSSComb **
[here](https://github.com/csscomb/jetbrains-csscomb).

如果您在自动加载时遇到问题，请尝试禁用 "safe write" in
`File > Settings > System Settings > Use "safe write" (保存更改为
临时文件先)`

### Atom

安装 atom 软件包

* [linter](https://atom.io/packages/linter)
* [linter-eslint](https://atom.io/packages/linter-eslint)
* [linter-stylelint](https://atom.io/packages/linter-stylelint)
* [react](https://atom.io/packages/react)

```shell
apm install linter linter-eslint react linter-stylelint
```

Install local npm packages

* [eslint](https://www.npmjs.com/package/eslint)
* [babel-eslint](https://www.npmjs.com/package/babel-eslint)
* [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
* [stylelint](https://www.npmjs.com/package/stylelint)

```shell
yarn add --dev eslint babel-eslint eslint-plugin-react stylelint
```

_You may need to restart atom for changes to take effect_

### SublimeText

安装 SublimeText 软件包\
最简单的 [Package Control](https://packagecontrol.io/) and then "Package Control:
Install Package" (Ctrl+Shift+P)

* [Babel](https://packagecontrol.io/packages/Babel)
* [Sublime-linter](http://www.sublimelinter.com/en/latest/)
* [SublimeLinter-contrib-eslint](https://packagecontrol.io/packages/SublimeLinter-contrib-eslint)
* [SublimeLinter-contrib-stylelint](https://packagecontrol.io/packages/SublimeLinter-contrib-stylelint)

你也可以使用
[SublimeLinter-contrib-eslint_d](https://packagecontrol.io/packages/SublimeLinter-contrib-eslint_d)
for faster linting.

将Babel设置为特定扩展的默认语法:

* 用这个扩展名打开一个文件,
* Select `View` from the menu,
* Then `Syntax` `->` `Open all with current extension as...` `->` `Babel` `->`
  `JavaScript (Babel)`.
* Repeat this for each extension (e.g.: .js and .jsx).

Install local npm packages

```
yarn add --dev eslint@latest
yarn add --dev babel-eslint@latest
yarn add --dev eslint-plugin-react
yarn add --dev stylelint
```
