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
  "/framework/React": [],
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
