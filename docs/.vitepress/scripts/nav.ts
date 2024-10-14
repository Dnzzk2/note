import type { DefaultTheme } from "vitepress";

const nav: DefaultTheme.NavItem[] = [
  {
    text: "WorkFlow",
    items: [{ text: "Vscode配置", link: "/workflow/vscode/setting" }],
  },
  {
    text: "CSS",
    link: "/css/Flex 和 inline-flex",
  },
  {
    text: "框架",
    items: [
      { text: "VitePress", link: "/framework/VitePress/configure-algolia" },
      { text: "React", link: "/framework/React/1.React 中常见的 Hooks" },
    ],
  },
];

export default nav;
