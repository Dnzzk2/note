---
description: VitePress配置algolia，帮助进行文档搜索。
head:
  - - meta
    - name: keywords
      content: 前端,VitePress,algolia，搜索，配置，教程。
  - - link
    - rel: canonical
      content: https://note.dnzzk2.icu/framework/VitePress/configure-algolia
  - - meta
    - property: og:title
      content: VitePress的algolia配置教程。
  - - meta
    - property: og:description
      content: 从头到尾实现VitePress配置algolia，帮助进行文档搜索。
  - - meta
    - property: og:url
      content: https://note.dnzzk2.icu/framework/VitePress/configure-algolia
---

# VitePress 配置 Algolia

Algolia 是一个数据库实时搜索服务，能够提供毫秒级的数据库搜索服务，并且其服务能以 API 的形式方便地布局到网页、客户端、APP 等多种场景。

## VitePress 官网

链接：[Algolia Search - VitePress](https://vitepress.dev/zh/reference/default-theme-search#algolia-search)。

从 VitePress 官网可知，配置 Algolia，需提供以下内容：

```js
import { defineConfig } from "vitepress";

export default defineConfig({
  themeConfig: {
    search: {
      provider: "algolia",
      options: {
        appId: "...",
        apiKey: "...",
        indexName: "...",
      },
    },
  },
});
```

## 注册 Algolia
