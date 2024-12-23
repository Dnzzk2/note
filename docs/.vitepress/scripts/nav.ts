import type { DefaultTheme } from "vitepress";

const nav: DefaultTheme.NavItem[] = [
  {
    text: "AI",
    link: "/AI/cursor-prompt",
  },
  {
    text: "WorkFlow",
    link: "/workflow/vscode/setting",
  },
  {
    text: "框架",
    items: [
      { text: "VitePress", link: "/framework/VitePress/configure-algolia" },
      { text: "React", link: "/framework/React/1.React 中常见的 Hooks" },
      { text: "Nest", link: "/framework/Nest/1.Nest 基础概念" },
      { text: "CSS", link: "/framework/CSS/attributes/Flex和inline-flex" },
    ],
  },
];

export default nav;
