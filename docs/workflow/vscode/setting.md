# Visual Studio Code 配置

## Visual Studio Code 插件

### 语言支持

| 扩展名 | 作用 |
|--------|------|
| [Chinese (Simplified) (简体中文) Language](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans) | 适用于 VS Code 的中文（简体）语言包 |
| [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport) | 自动查找、解析并为所有可用导入提供代码操作和代码完成。适用于 Typescript 和 TSX |

### Git 相关

| 扩展名 | 作用 |
|--------|------|
| [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) | 在 VS Code 中增强 Git — 通过 Git blame 注释和 CodeLens 一目了然地可视化代码作者身份等 |
| [git-commit-plugin](https://marketplace.visualstudio.com/items?itemName=redjue.git-commit-plugin) | 自动生成 git commit |

### 主题和图标

| 扩展名 | 作用 |
|--------|------|
| [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) | Visual Studio Code 的 Material Design 图标 |
| [Bluloco Dark Theme](https://marketplace.visualstudio.com/items?itemName=uloco.theme-bluloco-dark) | 一个花哨但又精致的深色设计师配色方案/主题 |
| [Houston](https://marketplace.visualstudio.com/items?itemName=astro-build.houston) | 以凉爽的蓝色、薄荷绿和柔和的紫色为特色的主题 |
| [Moegi Theme](https://marketplace.visualstudio.com/items?itemName=ddiu8081.moegi-theme) | VS Code 的优雅主题 |

### 开发工具

| 扩展名 | 作用 |
|--------|------|
| [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks) | 它可以帮助您在代码中导航，轻松快速地在重要位置之间移动 |
| [CodeSnap](https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap) | 📷 截取代码的精美屏幕截图 |
| [CodeTime](https://marketplace.visualstudio.com/items?itemName=Jannchie.codetime) | Codetime vscode 插件。代码时间的统计分析 |
| [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) | 自动完成文件名的 Visual Studio Code 插件 |
| [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) | 在编辑器中显示导入/需要包大小 |

### 代码质量和文档

| 扩展名 | 作用 |
|--------|------|
| [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) | 一个基本的拼写检查器，适用于代码和文档 |
| [Document This](https://marketplace.visualstudio.com/items?itemName=oouo-diogo-perdigao.docthis) | 在 TypeScript 和 JavaScript 文件中自动生成详细的 JSDoc 注释 |
| [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) | 直接在代码行内显示错误、警告和信息 |

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
