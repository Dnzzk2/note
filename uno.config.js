import { defineConfig } from "unocss";
import presetUno from "@unocss/preset-uno";
import presetIcons from "@unocss/preset-icons";

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  // 你可以在这里添加自定义规则或其他配置
});
