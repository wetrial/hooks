---
hero:
  actions:
    - text: Getting Started
      link: /getting-started
---

# @wetrial/hooks

基于 umi hooks 的 hooks 库

[![NPM version][image-1]][1] [![NPM downloads][image-2]][2]

## 📚 文档

- [中文](https://wetrial.github.io/hooks)

## ✨ 特性

- 易学易用
- 包含大量提炼自应用的高级 Hooks。
- 包含丰富的基础 Hooks。
- 使用 TypeScript 构建，提供完整的类型定义文件。

## 📣 说明

**你可以将 umi hooks 使用在任何地方，和任意组件库搭配使用。**
虽然我们的代码示例都是基于 ant design 的，但是并不代表我们的 Hooks 只能和 ant design 配合使用。

## 📦 安装

```
npm i @wetrial/hooks --save
```

## 🔨 使用

```
import { useFormTable } from '@wetrial/hooks';
```

## 🖥 开发

```
$ git clone git@github.com:wetrial/hooks.git
$ cd hooks
$ npm run init
$ npm start
```

打开浏览器访问 http://127.0.0.1:8001

## 🤝 贡献

我们欢迎所有人参与共建，请参考[CONTRIBUTING.MD](https://github.com/wetrial/hooks/blob/master/CONTRIBUTING.MD)

## ✅ License

[MIT](https://github.com/wetrial/hooks/blob/master/LICENSE)

[1]: https://www.npmjs.com/package/@wetrial/hooks
[2]: https://npmjs.org/package/@wetrial/hooks
[image-1]: https://img.shields.io/npm/v/@wetrial/hooks.svg?style=flat
[image-2]: https://img.shields.io/npm/dm/@wetrial/hooks.svg?style=flat

基于 [https://github.com/umijs/hooks](ahooks)，建议实际使用过程中 同时安装 ahooks 库

## 按需加载

可以通过以下的写法来按需加载 Hooks。

```javascript
import useFormTable from '@wetrial/hooks/es/useFormTable';
```

> 注意：Umi Hooks 默认支持基于 ES module 的 tree shaking，对于 js 部分，直接引入 `import { useFormTable } from '@wetrial/hooks'` 也会有按需加载的效果。

如果你使用了 babel，那么可以使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 来进行按需加载，加入这个插件后。你可以仍然这么写：

```javascript
import { useFormTable } from '@wetrial/hooks';
```

插件会帮你转换成 `@wetrial/hooks/es/useFormTable` 的写法。
