import type { DefaultTheme } from "vitepress";

const sidebar: DefaultTheme.Sidebar = {
  "/AI": [
    {
      text: "AI Prompt",
      items: [
        {
          text: "Cursor Prompt",
          link: "/AI/cusror-prompt",
        },
      ],
    },
  ],

  "/Cascading-Style-Sheets": [
    {
      text: "CSS属性",
      items: [
        {
          text: "Flex 和 inline-flex 的区别",
          link: "/Cascading-Style-Sheets/Flex和inline-flex",
        },
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
      text: "React",
      items: [
        {
          text: "React 中常见的 Hooks",
          link: "/framework/React/1.React 中常见的 Hooks",
        },
        {
          text: "React 中的 TypeScript 类型",
          link: "/framework/React/2.React 中的 TypeScript 类型",
        },
        {
          text: "受控与非受控",
          link: "/framework/React/3.受控与非受控",
        },
        {
          text: "Suspense 和 ErrorBoundary",
          link: "/framework/React/4.Suspense 和 ErrorBoundary",
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
