---
description: Dnzzk2's Vscode Setting && Dnzzk2 的 Vscode配置
---

# Vscode 配置

## 代码片段

```json
{
  //  -------------->>>    编译器   <<<------- //
  "editor.fontSize": 13.5,
  "editor.fontFamily": "'Fira Code Retina', 'Sarasa Term SC Regular' , Consolas, 'Courier New', monospace",
  "editor.fontLigatures": "'ss01', 'ss02', 'ss03', 'ss06', 'zero'",
  "editor.tabSize": 4,
  "editor.trimAutoWhitespace": false,
  "editor.minimap.enabled": false,
  //取消挠人的中文标点高亮
  "editor.unicodeHighlight.ambiguousCharacters": false,
  "editor.guides.bracketPairs": true,
  //  -------------->>>    窗口   <<<------- //
  "window.restoreFullscreen": true,
  //  -------------->>>    工作台   <<<------- //
  //主题
  "workbench.colorTheme": "Houston",
  "workbench.iconTheme": "material-icon-theme",
  //文件树缩进设置
  "workbench.tree.indent": 16,
  //  -------------->>>    文件关联   <<<------- //
  "files.associations": {
    "*.css": "tailwindcss"
  },
  //  -------------->>>    第三方插件   <<<------- //
  /**********  Gitlens **********/
  //快捷键键盘映射模式
  "gitlens.keymap": "alternate",
  /**********  Eslint **********/
  "eslint.format.enable": true,
  //eslint对这些后缀的文件进行验证
  "eslint.options": {
    "extensions": [".js", ".jsx", ".ts", ".tsx", ".vue"]
  },
  //eslint需要验证的文件类型
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "json5"
  ],
  /**********  MarkdownLint **********/
  //MD001: 这个规则禁止首个标题使用多个顶级标题 (#)。通过将其设置为 false，表示禁用此规则，允许使用多个顶级标题。
  //MD024: 这个规则要求标题之间有一定数量的空行。通过将其设置为 false，表示禁用此规则，允许标题之间没有空行。
  //MD033: 这个规则要求不在 Markdown 文件中使用内联 HTML。通过将其设置为 false，表示禁用此规则，允许使用内联 HTML。
  //MD041: 这个规则要求列表项的标记符（- 或 1.）与内容之间有一定数量的空格。通过将其设置为 false，表示禁用此规则，允许标记符与内容之间没有空格
  "markdownlint.config": {
    "MD001": false,
    "MD024": false,
    "MD033": false,
    "MD041": false
  },
  /**********  Prettier **********/
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[less]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[yaml]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[astro]": {
    "editor.defaultFormatter": "astro-build.astro-vscode"
  },
  /**********  Code Spell Checker **********/
  "cSpell.userWords": [
    "ahooks",
    "antd",
    "astro",
    "astrojs",
    "codesnap",
    "craco",
    "dnzzk",
    "esbenp",
    "Fira",
    "iconify",
    "Mapbox",
    "mapv",
    "mockjs",
    "Popconfirm",
    "tailwindcss",
    "tsconfigs",
    "xmlhttprequest"
  ],
  /**********  Codesnap **********/
  "codesnap.shutterAction": "copy",
  /**********  Copilot **********/
  "github.copilot.advanced": {
    "debug.overrideChatEngine": "gpt-4"
  },
  /**********  插件设置 **********/
  "extensions.autoUpdate": false,
  /**********  隐藏文件显示 **********/
  "files.exclude": {
    "**/.git": false
  },
  /**********  px2vw **********/
  "px2vw.width": 1920,
  "workbench.activityBar.location": "top",
  /**********  JSON **********/
  "json.schemaDownload.enable": false,
  "codeium.enableConfig": {
    "*": true
  }
}
```
