import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Note",
  description: "A Note For Dnzzk2",
  lang: "zh-Hans",
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["link", { rel: "apple-touch-icon", href: "/logo.png" }],
  ],
  themeConfig: {
    logo: "/logo.png",
    nav: [
      {
        text: "WorkFlow",
        items: [{ text: "Vscode配置", link: "/workflow/vscode/setting" }],
      },
      { text: "CSS收录", link: "/collection-css/luminous-corner" },
    ],
    sidebar: {
      "/collection-css": [
        {
          text: "CSS收录",
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
  },
});
