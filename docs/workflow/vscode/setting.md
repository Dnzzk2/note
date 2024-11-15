# Visual Studio Code 配置

## Visual Studio Code 插件

### 语言支持

| 扩展名                                                                                                                                 | 作用                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [Chinese (Simplified) (简体中文) Language](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans) | 适用于 VS Code 的中文（简体）语言包                                            |
| [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)                                                 | 自动查找、解析并为所有可用导入提供代码操作和代码完成。适用于 Typescript 和 TSX |

### Git 相关

| 扩展名                                                                                            | 作用                                                                                  |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) | 在 VS Code 中增强 Git — 通过 Git blame 注释和 CodeLens 一目了然地可视化代码作者身份等 |
| [git-commit-plugin](https://marketplace.visualstudio.com/items?itemName=redjue.git-commit-plugin) | 自动生成 git commit                                                                   |

### 主题和图标

| 扩展名                                                                                               | 作用                                         |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) | Visual Studio Code 的 Material Design 图标   |
| [Bluloco Dark Theme](https://marketplace.visualstudio.com/items?itemName=uloco.theme-bluloco-dark)   | 一个花哨但又精致的深色设计师配色方案/主题    |
| [Houston](https://marketplace.visualstudio.com/items?itemName=astro-build.houston)                   | 以凉爽的蓝色、薄荷绿和柔和的紫色为特色的主题 |
| [Moegi Theme](https://marketplace.visualstudio.com/items?itemName=ddiu8081.moegi-theme)              | VS Code 的优雅主题                           |

### 开发工具

| 扩展名                                                                                                      | 作用                                                   |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks)                      | 它可以帮助您在代码中导航，轻松快速地在重要位置之间移动 |
| [CodeSnap](https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap)                             | 📷 截取代码的精美屏幕截图                              |
| [CodeTime](https://marketplace.visualstudio.com/items?itemName=Jannchie.codetime)                           | Codetime vscode 插件。代码时间的统计分析               |
| [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) | 自动完成文件名的 Visual Studio Code 插件               |
| [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)                   | 在编辑器中显示导入/需要包大小                          |

### 代码质量和文档

| 扩展名                                                                                                          | 作用                                                        |
| --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) | 一个基本的拼写检查器，适用于代码和文档                      |
| [Document This](https://marketplace.visualstudio.com/items?itemName=oouo-diogo-perdigao.docthis)                | 在 TypeScript 和 JavaScript 文件中自动生成详细的 JSDoc 注释 |
| [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)                          | 直接在代码行内显示错误、警告和信息                          |

## 代码片段

```json
{
  "editor.fontSize": 14,
  "editor.lineHeight": 1.5,
  "editor.fontFamily": "'JetBrains Mono Regular', 'Fira Code Retina','苹方', 'Sarasa Term SC Regular' , Consolas, 'Courier New', monospace",
  // Fira Code 连字配置
  // "editor.fontLigatures": "'ss01', 'ss02', 'ss03', 'ss06', 'zero'",
  // JetBrains Mono 连字配置
  "editor.fontLigatures": true,
  "editor.tabSize": 4,
  "editor.trimAutoWhitespace": false,
  "editor.minimap.enabled": false,
  "editor.unicodeHighlight.ambiguousCharacters": false,
  "editor.guides.bracketPairs": true,
  "window.restoreFullscreen": true,
  "workbench.colorTheme": "Bluloco Dark Italic",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.activityBar.orientation": "vertical",
  "workbench.tree.indent": 16,
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "gitlens.keymap": "alternate",
  "eslint.format.enable": true,
  "eslint.options": {
    "extensions": [".js", ".jsx", ".ts", ".tsx", ".vue"]
  },
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
  "markdownlint.config": {
    "MD001": false,
    "MD024": false,
    "MD033": false,
    "MD041": false
  },
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
    "Guang",
    "iconify",
    "Mapbox",
    "mockjs",
    "Popconfirm",
    "tailwindcss",
    "tsconfigs",
    "vitepress",
    "xmlhttprequest"
  ],
  "codesnap.shutterAction": "copy",
  "github.copilot.advanced": {
    "debug.overrideChatEngine": "gpt-4"
  },
  "extensions.autoUpdate": false,
  "files.exclude": {
    "**/.git": false
  },
  "px2vw.width": 1920,
  "docthis.authorName": "Dnzzk2",
  "docthis.includeAuthorTag": true,
  "docthis.includeDateTag": true
}
```
