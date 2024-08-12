import type { HeadConfig } from "vitepress";

const head: HeadConfig[] = [
  ["link", { rel: "icon", href: "/logo.png" }],
  ["link", { rel: "apple-touch-icon", href: "/logo.png" }],
  ["meta", { name: "author", content: "Dnzzk2" }],
  ["meta", { name: "copyright", content: "© 2024 note.dnzzk2.icu" }],
  ["meta", { property: "og:type", content: "article" }],
  [
    "meta",
    { property: "og:image", content: "https://note.dnzzk2.icu/logo.png" },
  ],
  ["meta", { property: "og:site_name", content: "Note" }],
];

export default head;
