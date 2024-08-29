import { defineConfig } from "vitepress";
import head from "./scripts/head";
import nav from "./scripts/nav";
import algoliaOptions from "./scripts/algolia";
import sidebar from "./scripts/sidebar";
import UnoCSS from "unocss/vite";

export default defineConfig({
  title: "Note",
  description: "A Note For Dnzzk2",
  lang: "zh-CN",
  cleanUrls: true,
  lastUpdated: true,
  head: head,
  vite: {
    plugins: [UnoCSS()],
  },
  themeConfig: {
    search: {
      provider: "algolia",
      options: algoliaOptions,
    },
    logo: "/logo.png",
    lightModeSwitchTitle: "切换到暗黑模式",
    darkModeSwitchTitle: "切换到明亮模式",
    nav: nav,
    sidebar: sidebar,
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
