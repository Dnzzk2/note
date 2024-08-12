import type { DefaultTheme } from "vitepress";

const sidebar: DefaultTheme.Sidebar = {
  "/collection-css": [
    {
      text: "Cascading Style Sheets",
      items: [{ text: "发光边角", link: "/collection-css/luminous-corner" }],
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
  "/framework/VitePress": [
    {
      text: "VitePress",
      items: [
        {
          text: "Algolia Search",
          link: "/framework/VitePress/configure-algolia",
        },
      ],
    },
  ],
};

export default sidebar;
