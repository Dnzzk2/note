import DefaultTheme from "vitepress/theme";
import "./styles/custom.css";
import "./styles/global.css";
import Layout from "./components/Layout.vue";

export default { ...DefaultTheme, Layout };
