# CSS Modules 完全指南

> CSS Modules 是一种模块化和可扩展的 CSS 解决方案，通过自动生成唯一的类名来实现样式隔离。本指南将全面介绍 CSS Modules 的使用方法和最佳实践。

## 1. 基础概念

> 本章节介绍 CSS Modules 的基本概念、工作原理和核心特性，帮助你理解其解决的问题和实现方式。

### 1.1 CSS Modules 是什么

CSS Modules 是一种用于解决 CSS 类名冲突的解决方案。它通过自动为 CSS 类名添加唯一的标识符，确保样式的作用域是局部的，从而避免全局样式污染的问题。

### 1.2 工作原理

当我们创建一个以 `.module.css` 结尾的 CSS 文件时，构建工具会：

1. 自动为每个类名生成唯一的标识符
2. 生成一个 JavaScript 对象，将原始类名映射到生成的唯一类名
3. 在组件中通过这个对象引用类名

示例：

```css
/* 源代码：Button.module.css */
.button {
  color: white;
  background: blue;
}

/* 编译后的 CSS */
.Button_button__abc123 {
  color: white;
  background: blue;
}
```

### 1.3 核心特性

- ✨ 局部作用域：自动生成唯一的类名
- 🔄 样式组合：通过 composes 复用样式
- 📦 依赖管理：可以引用其他 CSS Module 文件
- 🔍 静态分析：在构建时就能发现样式问题

## 2. 使用方法

> 本章节将介绍 CSS Modules 的基本使用方法，包括基本语法、文件命名规范以及在不同框架中的使用方式。

### 2.1 基本语法

创建一个 CSS Module 文件：

```css
/* Button.module.css */
.button {
  padding: 10px 20px;
  border-radius: 4px;
}

.primary {
  background: blue;
  color: white;
}
```

在组件中使用：

```jsx
// React 组件
import styles from './Button.module.css';

function Button() {
  return <button className={styles.button}>点击我</button>;
}

// Vue 组件
<template>
  <button :class="$style.button">点击我</button>
</template>
```

### 2.2 文件命名规范

- 使用 `.module.css` 作为文件扩展名
- 文件名应与组件名保持一致
- 使用小写字母，多个单词用连字符分隔

### 2.3 框架集成

#### React 使用示例

```jsx
import styles from "./Button.module.css";

function Button({ type = "primary", children }) {
  return (
    <button className={`${styles.button} ${styles[type]}`}>{children}</button>
  );
}
```

#### Vue 使用示例

```vue
<template>
  <button :class="[$style.button, $style[type]]">
    <slot></slot>
  </button>
</template>

<style module>
.button {
  /* 按钮样式 */
}
</style>
```

## 3. 核心功能

> 本章节详细介绍 CSS Modules 的核心功能，包括局部作用域、样式组合、全局样式和变量共享等特性。

### 3.1 局部作用域

CSS Modules 默认将所有类名转换为唯一标识符：

```css
.title {
  color: red;
}
/* 编译后 */
.MyComponent_title__xyz123 {
  color: red;
}
```

### 3.2 样式组合

使用 `composes` 复用样式：

```css
.base {
  padding: 10px;
  border-radius: 4px;
}

.primary {
  composes: base;
  background: blue;
  color: white;
}
```

### 3.3 全局样式

使用 `:global` 定义全局样式：

```css
:global(.global-class) {
  color: red;
}

.local :global(.nested-global) {
  color: blue;
}
```

### 3.4 变量共享

通过 CSS 变量实现样式共享：

```css
:root {
  --primary-color: #007bff;
}

.button {
  background-color: var(--primary-color);
}
```

## 4. 高级特性

> 本章节介绍 CSS Modules 的高级特性，包括 TypeScript 集成、主题系统、响应式设计等进阶用法。

### 4.1 TypeScript 集成

```typescript
// custom.d.ts
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
```

### 4.2 主题系统

```css
/* theme.module.css */
.light {
  --bg-color: white;
  --text-color: black;
}

.dark {
  --bg-color: #1a1a1a;
  --text-color: white;
}
```

### 4.3 响应式设计

```css
.container {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

## 5. 工程实践

> 本章节介绍 CSS Modules 在实际项目中的最佳实践，包括项目结构、命名规范和性能优化等方面。

### 5.1 推荐的项目结构

```
src/
  ├── components/
  │   └── Button/
  │       ├── Button.tsx
  │       ├── Button.module.css
  │       └── index.ts
  └── styles/
      ├── variables.css
      ├── mixins.css
      └── themes/
```

### 5.2 最佳实践要点

#### 代码组织

- ✅ 一个组件对应一个 CSS Module 文件
- ✅ 使用语义化的类名
- ✅ 避免样式深层嵌套
- ❌ 不要在一个文件中包含多个组件的样式

#### 性能优化

- ✅ 合理使用选择器
- ✅ 避免过度使用全局样式
- ✅ 及时清理未使用的样式
- ❌ 不要生成过长的类名

## 6. 工具集成

> 本章节介绍如何在常用的构建工具中配置和使用 CSS Modules，包括各配置项的详细说明。

### 6.1 Webpack 配置

```javascript
{
  test: /\.module\.css$/,  // 匹配以 .module.css 结尾的文件
  use: [
    'style-loader',    // 将 CSS 注入到 DOM 中
    {
      loader: 'css-loader',
      options: {
        modules: {
          // 生成的类名格式：[文件名]__[类名]__[hash:base64:5]
          localIdentName: '[name]__[local]__[hash:base64:5]',
          // 是否启用驼峰命名
          exportLocalsConvention: 'camelCase',
          // 是否启用 CSS Modules
          mode: 'local'
        }
      }
    }
  ]
}
```

配置说明：

- `test`：使用正则表达式匹配需要处理的文件
- `style-loader`：将 CSS 转换为 JavaScript 模块并注入到 DOM
- `css-loader`：处理 CSS 文件，启用 CSS Modules 功能
- `localIdentName`：定义生成的类名格式
  - `[name]`：文件名
  - `[local]`：原始类名
  - `[hash:base64:5]`：5 位 base64 hash 值
- `exportLocalsConvention`：类名的导出格式（驼峰式或原始）
- `mode`：CSS Modules 模式（local/global）

### 6.2 Vite 配置

```javascript
export default {
  css: {
    modules: {
      // 类名转换为驼峰命名
      localsConvention: "camelCase",
      // 生成类名的作用域行为
      scopeBehaviour: "local",
      // 生成的类名格式
      generateScopedName: "[name]__[local]__[hash:base64:5]",
      // 是否将 CSS Modules 的类名映射注入到 JavaScript 中
      inject: true,
      // 预处理器选项
      preprocessorOptions: {
        scss: {
          // SCSS 配置
        },
      },
    },
  },
};
```

配置说明：

- `localsConvention`：类名的命名规则
  - `camelCase`：转换为驼峰命名
  - `dashes`：保持原始命名
- `scopeBehaviour`：作用域行为
  - `local`：默认值，启用局部作用域
  - `global`：全局作用域
- `generateScopedName`：类名生成规则
- `inject`：是否自动注入样式
- `preprocessorOptions`：预处理器配置项

### 6.3 PostCSS 集成

```javascript
// postcss.config.js
module.exports = {
  plugins: [
    // CSS Modules 插件
    require("postcss-modules")({
      // 生成的类名格式
      generateScopedName: "[name]__[local]__[hash:base64:5]",
      // 是否使用驼峰命名
      camelCase: true,
    }),
    // 自动添加浏览器前缀
    require("autoprefixer"),
    // CSS 压缩
    require("cssnano"),
  ],
};
```

配置说明：

- `postcss-modules`：CSS Modules 的 PostCSS 插件
- `autoprefixer`：自动添加浏览器前缀
- `cssnano`：优化和压缩 CSS

### 6.4 Stylelint 配置

```javascript
// .stylelintrc
{
  "extends": [
    // 标准规则集
    "stylelint-config-standard",
    // CSS Modules 特定规则
    "stylelint-config-css-modules"
  ],
  "rules": {
    // 允许使用 CSS Modules 的 composes 规则
    "property-no-unknown": [
      true,
      { "ignoreProperties": ["composes"] }
    ]
  }
}
```

配置说明：

- `stylelint-config-standard`：Stylelint 标准配置
- `stylelint-config-css-modules`：CSS Modules 专用规则
- `rules`：自定义规则配置
  - `property-no-unknown`：允许使用 CSS Modules 特定属性

## 7. 调试技巧

> 本章节提供常见问题的解决方案和调试技巧。

### 常见问题及解决方案

1. **动态类名处理**

推荐使用 `classnames` 库来处理动态类名。这是一个轻量级的工具库，用于有条件地将类名连接在一起。

安装：

```bash
npm install classnames
# 或
yarn add classnames
```

基本用法：

```jsx
import classNames from "classnames";

// 简单示例
const buttonClass = classNames({
  [styles.button]: true,
  [styles.primary]: type === "primary",
  [styles.disabled]: disabled,
});

// 多种用法示例
const classes = classNames(
  styles.button, // 固定类名
  styles[size], // 动态类名
  {
    [styles.disabled]: disabled, // 条件类名
    [styles.active]: isActive,
  },
  otherClassName // 其他类名
);

function Button({ type, size, disabled, isActive }) {
  return <button className={classes}>按钮</button>;
}
```

`classnames` 的特点：

- 🔧 支持多种参数类型：字符串、对象、数组
- 🎯 自动过滤掉假值（false、null、undefined、0、""）
- 🔄 支持动态和条件类名
- 💡 使代码更简洁易读

常见用法：

```jsx
// 对象语法
classNames({
  [styles.foo]: true,
  [styles.bar]: false,
}); // => 'foo'

// 混合语法
classNames(styles.foo, {
  [styles.bar]: true,
}); // => 'foo bar'

// 数组语法
classNames([styles.foo, styles.bar]); // => 'foo bar'

// 条件类名
classNames(styles.base, {
  [styles.normal]: type === "normal",
  [styles.primary]: type === "primary",
  [styles.danger]: type === "danger",
});
```

2. **第三方组件样式覆盖**

   ```css
   .wrapper :global(.ant-btn) {
     border-radius: 0;
   }
   ```

3. **样式优先级问题**
   - 使用 CSS Modules 的命名空间
   - 避免使用 `!important`
   - 合理组织选择器优先级

### 调试工具

- 🔍 Chrome DevTools
- 📦 CSS Modules 插件
- 🛠️ Source Maps

## 参考资料

- [CSS Modules 官方文档](https://github.com/css-modules/css-modules)
- [CSS Modules 使用教程](https://www.ruanyifeng.com/blog/2016/06/css_modules.html)
- [webpack CSS Modules](https://webpack.js.org/loaders/css-loader/#modules)
- [Vite CSS Modules](https://vitejs.dev/guide/features.html#css-modules)
