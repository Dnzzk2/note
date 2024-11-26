# Styled Components 完全指南

Styled Components 是 React 生态系统中最受欢迎的 CSS-in-JS 库之一，它允许你使用 ES6 的标签模板字符串语法来定义组件的样式。

## 1. 基础用法

### 创建基础样式组件

```tsx
import styled from "styled-components";

// 创建一个带样式的 button
const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 使用
function App() {
  return <Button>点击我</Button>;
}
```

### Props 传递与样式计算

```tsx
const Button = styled.button<{ $primary?: boolean }>`
  background-color: ${(props) => (props.$primary ? "#007bff" : "#6c757d")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
`;

// 使用
function App() {
  return (
    <>
      <Button $primary>主要按钮</Button>
      <Button>次要按钮</Button>
    </>
  );
}
```

## 2. 高级特性

### 样式继承

```tsx
const Button = styled.button`
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
`;

const PrimaryButton = styled(Button)`
  background-color: #007bff;
`;

const DangerButton = styled(Button)`
  background-color: #dc3545;
`;
```

### 主题支持

```tsx
// 定义主题类型
interface Theme {
  colors: {
    primary: string;
    secondary: string;
  };
  spacing: {
    small: string;
    medium: string;
  };
}

// 创建主题对象
const theme: Theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
  },
  spacing: {
    small: "8px",
    medium: "16px",
  },
};

// 使用主题
const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.medium};
`;

// 在应用中使用
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>主题按钮</Button>
    </ThemeProvider>
  );
}
```

### 全局样式

```tsx
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen;
  }

  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>你的应用内容</div>
    </>
  );
}
```

## 3. 最佳实践

### 组件样式分离

```tsx
// Button/styles.ts
import styled from "styled-components";

export const StyledButton = styled.button`
  // 样式定义
`;

// Button/index.tsx
import { StyledButton } from "./styles";

export function Button(props) {
  return <StyledButton {...props} />;
}
```

### CSS Helper 函数

```tsx
// styles/helpers.ts
import { css } from "styled-components";

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ellipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// 使用
const Card = styled.div`
  ${flexCenter}
  width: 200px;

  h3 {
    ${ellipsis}
    width: 100%;
  }
`;
```

### 动画定义

```tsx
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Modal = styled.div`
  animation: ${fadeIn} 0.3s ease-in;
`;
```

## 4. TypeScript 支持

### 组件 Props 类型定义

```tsx
interface ButtonProps {
  $primary?: boolean;
  $size?: "small" | "medium" | "large";
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.$primary ? "#007bff" : "#6c757d")};
  padding: ${(props) => {
    switch (props.$size) {
      case "small":
        return "8px 16px";
      case "large":
        return "16px 32px";
      default:
        return "12px 24px";
    }
  }};
`;
```

### 主题类型声明

```tsx
// styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
    };
    spacing: {
      small: string;
      medium: string;
    };
  }
}
```

## 5. 性能优化

### 使用 useMemo 缓存样式组件

```tsx
function Component({ primary }) {
  const StyledButton = useMemo(
    () => styled.button`
      background-color: ${primary ? "#007bff" : "#6c757d"};
    `,
    [primary]
  );

  return <StyledButton>按钮</StyledButton>;
}
```

### 避免不必要的 Props 传递

```tsx
// 不推荐
const Button = styled.button`
  color: ${(props) => props.color};
`;

// 推荐：使用 $ 前缀避免属性传递给 DOM
const Button = styled.button`
  color: ${(props) => props.$color};
`;
```

## 6. 常见问题解决

### SSR 支持

```tsx
import { ServerStyleSheet } from "styled-components";

export default function Document() {
  const sheet = new ServerStyleSheet();
  try {
    const styleTags = sheet.getStyleElement();
    return (
      <html>
        <head>{styleTags}</head>
        <body>
          <Main />
        </body>
      </html>
    );
  } finally {
    sheet.seal();
  }
}
```

### 样式优先级问题

```tsx
// 使用 && 提高优先级
const Button = styled.button`
  && {
    background-color: #007bff;
  }
`;

// 或使用 css 助手函数
const primaryStyles = css`
  background-color: #007bff;
`;

const Button = styled.button`
  ${primaryStyles}
`;
```

## 总结

Styled Components 提供了一种优雅的方式来编写组件样式，它的主要优势包括：

1. 真正的 CSS-in-JS，没有类名冲突
2. 动态样式变得简单直观
3. 自动注入前缀
4. 主题支持
5. 服务端渲染支持
6. 完整的 TypeScript 支持

建议在以下场景使用 Styled Components：

- 构建组件库
- 需要动态主题的应用
- React 项目中需要精细控制样式的场景
