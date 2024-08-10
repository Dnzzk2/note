import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Note",
  description: "A Note For Dnzzk2",
  lang: "zh-CN",
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["link", { rel: "apple-touch-icon", href: "/logo.png" }],
    ["meta", { name: "author", content: "Dnzzk2" }],
    ["meta", { name: "copyright", content: "© 2024 note.dnzzk2.icu" }],
    ["meta", { property: "og:type", content: "article" }],
    [
      "meta",
      { property: "og:image", content: "https://note.dnzzk2.icu/logo.png" },
    ],
    ["meta", { property: "og:site_name", content: "Note" }],
  ],
  themeConfig: {
    search: {
      provider: "algolia",
      options: {
        appId: "HTWB9AR1CG",
        apiKey: "97863c8fc40e33feb1982826bb59ca85",
        indexName: "dnzzk2",
        placeholder: "请输入关键词",
        translations: {
          button: {
            buttonText: "请输入关键词",
          },
        },
      },
    },
    logo: "/logo.png",
    lightModeSwitchTitle: "切换到暗黑模式",
    darkModeSwitchTitle: "切换到明亮模式",
    nav: [
      {
        text: "WorkFlow",
        items: [{ text: "Vscode配置", link: "/workflow/vscode/setting" }],
      },
      {
        text: "Cascading Style Sheets",
        link: "/collection-css/luminous-corner",
      },
      {
        text: "框架",
        items: [{ text: "React", link: "/framework/React/hooks" }],
      },
    ],
    sidebar: {
      "/collection-css": [
        {
          text: "Cascading Style Sheets",
          items: [
            { text: "发光边角", link: "/collection-css/luminous-corner" },
          ],
        },
      ],
      "/workflow": [
        {
          text: "Visual Studio Code",
          items: [
            {
              text: "Visual Studio Code 配置",
              link: "/workflow/vscode/setting",
            },
          ],
        },
      ],
      "/framework/React": [
        {
          text: "React通关秘籍",
          items: [
            {
              text: "React中常见的Hooks",
              link: "/framework/React/hooks",
            },
            {
              text: "React中的TypeScript",
              link: "/framework/React/type-in-react",
            },
            {
              text: "受控与非受控",
              link: "/framework/React/controlled-and-uncontrolled",
            },
            {
              text: "迷你Calendar",
              link: "/framework/React/mini-calendar",
            },
          ],
        },
      ],
    },
    outline: {
      label: "页面导航",
      level: [2, 3],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/Dnzzk2/note.dnzzk2.cn" },
    ],
    footer: {
      message: "Crafted with care.",
      copyright: "Copyright © 2024-present Dnzzk2",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
    editLink: {
      pattern: "https://github.com/Dnzzk2/note.dnzzk2.cn/edit/main/docs/:path",
      text: "在 Github 上编辑此页面",
    },
  },
});
