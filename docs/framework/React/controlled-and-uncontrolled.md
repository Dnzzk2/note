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

组件初始化，执行一次 useState 内部的回调函数，通过 useRef 记录是否第一次渲染，避免在 useEffect 中，再次 setValue，导致 defaultValue 被覆盖(当 propsValue 为 undefined 时)。当 propsValue 有值的时候，是受控模式，mergedValue 展示的是 propsValue 的值，如果这个时候 propsValue 在组件外部被设置成 undefined（移除 value 属性，或者设置值为 undefined），那么 mergedValue 的值就会变成组件内部的 value，组件内部的 value，在初始化的时候就已经设置好了，展示的也是这个值，这明显不符合组件逻辑，所以我们需要重置 value，所以在 useEffect 中，如果 propsValue 为 undefined 且不是初次渲染，则重置 value。
:::
