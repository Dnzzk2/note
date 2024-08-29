import DefaultTheme from "vitepress/theme";
import "./styles/custom.css";
import "./styles/global.css";
import 'uno.css';
import Layout from "../components/theme/Layout.vue";

export default { ...DefaultTheme, Layout };
