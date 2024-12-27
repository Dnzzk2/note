import type { DefaultTheme } from "vitepress";

const sidebar: DefaultTheme.Sidebar = {
  "/Cascading-Style-Sheets": [
    {
      text: "CSS 属性",
      items: [
        {
          text: "CSS 中的 flex 和 inline-flex",
          link: "/Cascading-Style-Sheets/attributes/Flex和inline-flex",
        },
      ],
    },
    {
      text: "CSS-in-JS",
      items: [
        {
          text: "掌握 styled-components",
          link: "/Cascading-Style-Sheets/CSS-in-js/styled-components",
        },
      ],
    },
    {
      text: "CSS Modules",
      link: "/Cascading-Style-Sheets/css-modules",
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
        {
          text: "React.Children API",
          link: "/framework/React/5.React.Children API",
        },
        {
          text: "封装三个 API",
          link: "/framework/React/6.封装三个 API",
        },
        {
          text: "网页中的距离",
          link: "/framework/React/7.网页中的距离",
        },
        {
          text: "React-lazyload",
          link: "/framework/React/8.React-lazyload",
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
  "/framework/Nest": [
    {
      text: "Nest",
      items: [
        {
          text: "Nest 基础概念",
          link: "/framework/Nest/1.Nest 基础概念",
        },
      ],
    },
  ],
};

export default sidebar;
