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

链接：[Apply - docsearch Algolia](https://docsearch.algolia.com/apply/)。

<ImagePreview src="/img/apply.png" alt="申请Algolia" />

填写博客 url 地址，邮箱地址，项目的存储地址（选填）。

> [!IMPORTANT]
>
> - 您必须是该网站的所有者，或至少有更新其内容的权限。
> - 你的网站必须是公开的。
> - 你的网站必须是一个开源项目或技术博客的技术文档，不授权于商业内容。
> - 你的网站必须到生产环境。

## 申请成功并登录

发送申请之后，我们会收到一封邮件，该邮件表明他们已经收到我们的申请，并会在之后给我们答复。

过段时间，申请成功，我们会收到另一封邮件。

<ImagePreview src="/img/email.png" alt="密钥email" />

点击 <u>_Accept this invitation to join your application and get started!_</u>

我们会跳转到登录页面

<ImagePreview src="/img/login.png" alt="login" />

使用申请的邮箱注册账号或者使用第三方登录。

## 配置 Key

<ImagePreview src="/img/workBench.png" alt="workBench" />

在控制台页面，我们可以获取 `Application ID`、`Search API Key`。

点击 <u>Data Sources</u> > <u>indics</u>

<ImagePreview src="/img/indexName.png" alt="indexName" />

获取 `indexName`。

在 VitePress 中配置 `Application ID`、`Search API Key`、`indexName`，即可体验 Algolia。

## 可能的问题

### 1.搜索结果为空

Algolia 需要检索我们的网站数据并返回给我们搜索结果，我们之前的设置中并没有让 Algolia 获得我们的网络数据，因此我们需要使用爬虫让 Algolia 爬取。

<ImagePreview src="/img/workBench.png" alt="workBench" />

在工作台中，点击 <u>Go To Crawler</u>。跳转至 `Crawler` ，一款 Algolia 官方的爬虫工具。

<ImagePreview src="/img/record.png" alt="record" />

**Monitoring** 记录爬虫爬取的 url，**Indices** 记录爬虫爬取的 record。
如果这些数据都存在，主要是 records 的数量，那么就可以知道该工具是否正确爬取了我们的网站数据。

如果没有数据，点击<u>Restart crawling</u>，可以重新爬取。

爬取数据之后，搜索结果为空，如果我们在 VitePress.config.mts 中配置了语言

```mts
// .vitePress.config.mts
lang: "zh-CN",

```

Algolia 在搜索过程中会带上语言参数，Algolia 后台的数据是以 `lang:en-US` 的形式存储的，搜索 `lang:zh-CN` 自然没有结果。

**解决方案：**

点击 <u>Editor</u> 在爬取的过程中，修改存储的数据的 lang 为 `zh-CN`。

```js
new Crawler({
  //  略
  actions: [
    {
      indexName: "dnzzk2",
      pathsToMatch: ["https://note.dnzzk2.icu/**"],
      recordExtractor: ({ $, helpers }) => {
        const records = helpers.docsearch({
          recordProps: {
            lvl1: ".content h1", // 确保这对应页面的实际结构
            content: ".content p, .content li",
            lvl0: {
              selectors: "header h1, .navbar-brand", // 如果有页面标题或顶级导航
              defaultValue: "Documentation",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
          },
          aggregateContent: true,
          recordVersion: "v3",
        });
        records.forEach((record) => {
          record.lang = "zh-CN";
        });
        return records;
      },
    },
  ],
  //  略
});
```
