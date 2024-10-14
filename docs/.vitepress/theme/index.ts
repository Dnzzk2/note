import DefaultTheme from "vitepress/theme";
import "./styles/custom.css";
import "./styles/global.css";
import "./styles/template.css";
import "uno.css";
import Layout from "../components/theme/Layout.vue";
import ImagePreview from "../components/common/ImagePreview.vue";
import type { Theme } from "vitepress";

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component("ImagePreview", ImagePreview);
  },
} satisfies Theme;
