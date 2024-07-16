import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Note",
  description: "A Note For Dnzzk2",
  head: [
    // 添加一个链接到你的favicon图标
    ["link", { rel: "icon", href: "/logo.png" }],
    // 添加一个链接到你的logo图片
    ["link", { rel: "apple-touch-icon", href: "/logo.png" }],
  ],
  themeConfig: {
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "知识", link: "/knowLedge" },
      { text: "CSS收录", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Dnzzk2/note.dnzzk2.cn" },
    ],

    footer: {
      message: "Crafted with care.",
      copyright: "Copyright © 2024-present Dnzzk2",
    },
  },
});
