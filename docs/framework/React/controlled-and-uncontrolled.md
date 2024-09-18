---
description: "受控模式与非受控模式的区别"
head:
  - - meta
    - name: keywords
      content: 受控模式与非受控模式的区别，前端，React。
  - - link
    - rel: canonical
      content: https://note.dnzzk2.icu/framework/React/controlled-and-uncontrolled
  - - meta
    - property: og:title
      content: 受控模式与非受控模式的区别
  - - meta
    - property: og:description
      content: 受控模式与非受控模式的区别
  - - meta
    - property: og:url
      content: https://note.dnzzk2.icu/framework/React/controlled-and-uncontrolled
---

# 受控与非受控

以小见大，先通过表单元素，再去了解组件。

## 表单元素

在表单中，我们可以通过两种方式去改变表单的值 `value` ，一种是 `用户的输入` ，一种是通过 `代码` 内部去改变。

`value` 的初始值，可以由代码设置，但是只能通过 `用户的输入` 去改变，代码可以通过 ref 拿到 DOM 或者 onChange 获取 value，并做额外操作，这是 `非受控模式` 。

**非受控模式图解**
<ImagePreview  src="/img/uncontrolled.png" alt="非受控模式图解" />

与之相反，`代码` 可以内部自己改变 `value` 的值，这就是 `受控模式` 。

**受控模式图解**
<ImagePreview  src="/img/controlled.png" alt="受控模式图解"/>

::: tip
`value` 和 `defaultValue` 是不一样的。 `defaultValue` 只是设置了初始值，不是改变 value。一旦设置了 value，用户的输入不会改变表单的值，但是会触发 onChange 事件，可以通过 onChange 去获得输入的值，然后通过代码去设置表单的值，这就是受控模式。

大部分情况下，非受控模式就可以了，我们只需要获得用户输入的值，不需要手动修改表单的值。

value 由用户控制就是非受控模式，由代码控制就是受控模式。
:::

## 组件

组件也需要考虑受控与非受控的情况。

`业务组件` 只需要拿到用户的输入就可以了，一般来说，用非受控模式就可以。

如果是 `基础组件` ，建议受控模式和非受控模式都支持。

下面使用日历组件例子。

### 非受控写法

```tsx
import { ChangeEvent, useState } from "react";

interface CalendarProps {
  defaultValue?: Date;
  onChange?: (date: Date) => void;
}
function Calendar(props: CalendarProps) {
  const { defaultValue = new Date(), onChange } = props;

  const [value, setValue] = useState(defaultValue);

  function changeValue(date: Date) {
    setValue(date);
    onChange?.(date);
  }

  return (
    <div>
      {value.toLocaleDateString()}
      <div
        onClick={() => {
          changeValue(new Date("2024-5-1"));
        }}
      >
        2023-5-1
      </div>
      <div
        onClick={() => {
          changeValue(new Date("2024-5-2"));
        }}
      >
        2023-5-2
      </div>
      <div
        onClick={() => {
          changeValue(new Date("2024-5-3"));
        }}
      >
        2023-5-3
      </div>
    </div>
  );
}

function App() {
  return (
    <Calendar
      defaultValue={new Date("2024-5-1")}
      onChange={(date) => {
        console.log(date.toLocaleDateString());
      }}
    />
  );
}

export default App;
```

::: tip
这里 Calendar 组件传入 defaultValue 和 onChange 参数。

defaultValue 会作为 value 的初始值，然后用户点击不同日期会修改 value，然后回调 onChange 函数。

这种情况，调用者只能设置 defaultValue 初始值，不能直接传入 value 来控制，所以是非受控模式。
:::

### 受控模式写法

```tsx
import { ChangeEvent, useEffect, useState } from "react";

interface CalendarProps {
  value: Date;
  onChange?: (date: Date) => void;
}
function Calendar(props: CalendarProps) {
  const { value, onChange } = props;

  function changeValue(date: Date) {
    onChange?.(date);
  }

  return (
    <div>
      {value.toLocaleDateString()}
      <div
        onClick={() => {
          changeValue(new Date("2024-5-1"));
        }}
      >
        2023-5-1
      </div>
      <div
        onClick={() => {
          changeValue(new Date("2024-5-2"));
        }}
      >
        2023-5-2
      </div>
      <div
        onClick={() => {
          changeValue(new Date("2024-5-3"));
        }}
      >
        2023-5-3
      </div>
    </div>
  );
}

function App() {
  const [value, setValue] = useState(new Date("2024-5-1"));

  return (
    <Calendar
      value={value}
      onChange={(date) => {
        console.log(date.toLocaleDateString());
        setValue(date);
      }}
    />
  );
}

export default App;
```

### 受控与非受控都支持

```tsx
import { useEffect, useRef, useState } from "react";

interface CalendarProps {
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
}

function Calendar(props: CalendarProps) {
  const { value: propsValue, defaultValue, onChange } = props;

  const [value, setValue] = useState(() => {
    if (propsValue !== undefined) {
      return propsValue;
    } else {
      return defaultValue;
    }
  });

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (propsValue === undefined && !isFirstRender.current) {
      setValue(propsValue);
    }
    isFirstRender.current = false;
  }, [propsValue]);

  const mergedValue = propsValue === undefined ? value : propsValue;

  function changeValue(date: Date) {
    if (propsValue === undefined) {
      setValue(date);
    }
    onChange?.(date);
  }

  return (
    <div>
      {mergedValue?.toLocaleDateString()}
      <div
        onClick={() => {
          changeValue(new Date("2024-5-1"));
        }}
      >
        2023-5-1
      </div>
      <div
        onClick={() => {
          changeValue(new Date("2024-5-2"));
        }}
      >
        2023-5-2
      </div>
      <div
        onClick={() => {
          changeValue(new Date("2024-5-3"));
        }}
      >
        2023-5-3
      </div>
    </div>
  );
}

function App() {
  return (
    <Calendar
      defaultValue={new Date("2024-5-1")}
      onChange={(date) => {
        console.log(date.toLocaleDateString());
      }}
    />
  );
}

export default App;
```

::: tip
过程：

1、组件初始化时，useState 的回调函数会执行一次，返回 `propsValue` 或 `defaultValue`（优先使用 `propsValue`，如果未提供则使用 `defaultValue`）。

2、useRef 用来跟踪是否是组件的第一次渲染，它在 useEffect 中起到了避免重复调用 setValue 的作用。这个作用是防止 useEffect 中由于 `propsValue` 为 `undefined` 而不小心覆盖组件内部状态 value 的情况。

3、受控模式：当 `propsValue` 有值时，组件处于受控模式，mergedValue 会展示 `propsValue`。此时，`propsValue` 的改变会直接影响组件显示的日期。

4、非受控模式：当外部将 `propsValue` 移除或设置为 `undefined` 时，mergedValue 会展示组件内部的 value，这个 value 是在初始化时根据 `defaultValue` 或 `propsValue` 设置的。这是组件进入非受控模式的过程。

5、useEffect 的作用：为了确保组件逻辑的正确性，当 `propsValue` 变为 `undefined` 且不是第一次渲染时，useEffect 会重置内部的 value，避免在非受控模式下展示不一致的值。
:::

## useMergeValue

根据以上的逻辑，我们手写一个 hooks，用于适应受控和非受控结合的模式。

```tsx
function useMergeState<T>(
  defaultStateValue: T,
  props?: {
    defaultValue?: T;
    value?: T;
  }
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const { defaultValue, value: propsValue } = props || {};

  const isFirstRender = useRef(true);

  const [stateValue, setStateValue] = useState<T>(() => {
    if (propsValue !== undefined) {
      return propsValue;
    } else if (defaultValue !== undefined) {
      return defaultValue;
    } else {
      return defaultStateValue;
    }
  });

  useEffect(() => {
    if (propsValue === undefined && !isFirstRender.current) {
      setStateValue(propsValue);
    }

    isFirstRender.current = false;
  }, [propsValue]);

  const mergedValue = propsValue === undefined ? stateValue : propsValue;

  return [mergedValue, setStateValue];
}
```

封装 onChange

```tsx
import {
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

function useMergeState<T>(
  defaultStateValue: T,
  props?: {
    defaultValue?: T;
    value?: T;
    onChange?: (value: T) => void;
  }
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const { defaultValue, value: propsValue, onChange } = props || {};

  const isFirstRender = useRef(true);

  const [stateValue, setStateValue] = useState<T>(() => {
    if (propsValue !== undefined) {
      return propsValue!;
    } else if (defaultValue !== undefined) {
      return defaultValue!;
    } else {
      return defaultStateValue;
    }
  });

  useEffect(() => {
    if (propsValue === undefined && !isFirstRender.current) {
      setStateValue(propsValue!);
    }

    isFirstRender.current = false;
  }, [propsValue]);

  const mergedValue = propsValue === undefined ? stateValue : propsValue;

  function isFunction(value: unknown): value is Function {
    return typeof value === "function";
  }

  const setState = useCallback(
    (value: SetStateAction<T>) => {
      let res = isFunction(value) ? value(stateValue) : value;

      if (propsValue === undefined) {
        setStateValue(res);
      }
      onChange?.(res);
    },
    [stateValue]
  );

  return [mergedValue, setState];
}

interface CalendarProps {
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
}

function Calendar(props: CalendarProps) {
  const { value: propsValue, defaultValue, onChange } = props;

  const [mergedValue, setValue] = useMergeState(new Date(), {
    value: propsValue,
    defaultValue,
    onChange,
  });

  return (
    <div>
      {mergedValue?.toLocaleDateString()}
      <div
        onClick={() => {
          setValue(new Date("2024-5-1"));
        }}
      >
        2023-5-1
      </div>
      <div
        onClick={() => {
          setValue(new Date("2024-5-2"));
        }}
      >
        2023-5-2
      </div>
      <div
        onClick={() => {
          setValue(new Date("2024-5-3"));
        }}
      >
        2023-5-3
      </div>
    </div>
  );
}

function App() {
  const [value, setValue] = useState(new Date("2024-5-1"));

  return (
    <Calendar
      value={value}
      onChange={(date) => {
        console.log(date.toLocaleDateString());
        setValue(date);
      }}
    />
  );
  // return <Calendar defaultValue={new Date('2024-5-1')} onChange={(date) => {
  //   console.log(date.toLocaleDateString());
  // }}/>
}

export default App;
```
