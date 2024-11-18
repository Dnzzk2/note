import type { DefaultTheme } from "vitepress";

const nav: DefaultTheme.NavItem[] = [
  {
    text: "AI",
    link: "/AI/cusror-prompt",
  },
  {
    text: "WorkFlow",
    link: "/workflow/vscode/setting",
  },
  {
    text: "CSS",
    link: "/Cascading-Style-Sheets/Flex和inline-flex",
  },
  {
    text: "框架",
    items: [
      { text: "VitePress", link: "/framework/VitePress/configure-algolia" },
      { text: "React", link: "/framework/React/1.React 中常见的 Hooks" },
      { text: "Nest", link: "/framework/Nest/1.Nest 基础概念" },
    ],
  },
];

export default nav;
