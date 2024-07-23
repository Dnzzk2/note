---
description: React中的TypeScript类型
---

# React 中的 TypeScript 类型

## 描述 JSX 的类型

使用 `React.ReactElement`描述 JSX 的类型，如果传过来的不一定是组件也可能是`number`或是`null`，则使用 React.ReactNode。

ReactNode 包含 ReactElement、或者 number、string、null、boolean 等可以写在 JSX 里的类型。

```ts
type ReactNode =
  | ReactElement
  | string
  | number
  | Iterable<ReactNode>
  | ReactPortal
  | boolean
  | null
  | undefined
  | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES[
    keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES];
```

ReactNode > ReactElement > JSX.Element

一般情况下，描述一个 JSX 类型，使用 React.ReactNode

## 函数组件的类型

`React.FunctionComponent` = `FC`

## hooks 的类型

### useState

推导类型或者`useState<Type>()`

### useRef

- 保存 DOM 引用，参数传 null，ref.current 只读

```tsx
const ref = useRef<HTMLDivElement>(null);
```

- 数据，参数不传 null

```tsx
const ref = useRef<{ num: number }>({ num: 1 });
```

### useImperativeHandle

```tsx
import { useRef } from "react";
import { useEffect } from "react";
import React from "react";
import { useImperativeHandle } from "react";

interface GuangProps {
  name: string;
}

interface GuangRef {
  aaa: () => void;
}

const Guang: React.ForwardRefRenderFunction<GuangRef, GuangProps> = (
  props,
  ref
) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        aaa() {
          inputRef.current?.focus();
        },
      };
    },
    [inputRef]
  );

  return (
    <div>
      <input ref={inputRef}></input>
      <div>{props.name}</div>
    </div>
  );
};

const WrapedGuang = React.forwardRef(Guang);

function App() {
  const ref = useRef<GuangRef>(null);

  useEffect(() => {
    console.log("ref", ref.current);
    ref.current?.aaa();
  }, []);

  return (
    <div className="App">
      <WrapedGuang name="guang" ref={ref} />
    </div>
  );
}

export default App;
```

`React.ForwardRefRenderFunction<ref,props>`
`React.forwardRef<ref,props>`

第一个参数是 ref 的内容类型，第二个是 props 的类型

`useImperativeHanlde` 可以有两个类型参数，一个是 ref 内容的类型，一个是 ref 内容扩展后的类型。

```tsx
useImperativeHandle < GuangRef,
  { bbb: string } &&
    GuangRef >
      (ref,
      () => {
        return {
          aaa() {
            inputRef.current?.focus();
          },
          bbb: "bbb",
        };
      },
      [inputRef]);
```

### useReducer

`useReducer<Reducer<Data,Action>,string>>`，可以传一个参数类型也可以传两个参数类型

传一个参数类型的时候，`Reducer<Data,Action>`，Data 是 data 的类型，Action 是 action 的类型

传两个参数的时候，`useReducer<Reducer<Data,Action>,string>>(recuder,'1',(params)=>{return {}})`，第二个参数就是初始化函数的参数的类型

### useCallback

```tsx
const fun = useCallback<() => number>(() => {
  return 1;
});
```

### useMemo
