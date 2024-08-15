import type { DefaultTheme } from "vitepress";

const nav: DefaultTheme.NavItem[] = [
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
    items: [
      { text: "React", link: "/framework/React/hooks" },
      { text: "Vue", link: "/framework/Vue/comp" },
      { text: "VitePress", link: "/framework/VitePress/configure-algolia" },
    ],
  },
];

export default nav;
