---
description: "Calendar日历组件"
head:
  - - meta
    - name: keywords
      content: Calendar日历组件，前端，手写组件，React。
  - - link
    - rel: canonical
      content: https://note.dnzzk2.icu/framework/React/mini-calendar
  - - meta
    - property: og:title
      content: Calendar日历组件，使用React手写Calendar日历组件。
  - - meta
    - property: og:description
      content: Calendar日历组件，使用React手写Calendar日历组件。
  - - meta
    - property: og:url
      content: https://note.dnzzk2.icu/framework/React/calendar
---

# Calendar 日历

手写 Calendar 日历，实操组件。

## 创建项目

```bash
npx create-react-app --template typescript calendar-component
```

## 思路

日历组件的核心是什么？

是拿到每月的天数，每月的第一天是星期几。

## dayjs

在 mini-calendar 中，我们使用 Date API，但是，在日历组件中，我们使用 `dayjs`。

### 安装 dayjs

```bash
npm install --save dayjs
```

在 test.js 写如下代码：

```js
const dayjs = require("dayjs");

console.log(dayjs("2023-11-1").daysInMonth());

console.log(dayjs("2023-11-1").startOf("month").format("YYYY-MM-DD"));

console.log(dayjs("2023-11-1").endOf("month").format("YYYY-MM-DD"));
```

创建一个 `dayjs` 的对象，然后用 `daysInMonth` 方法可以拿到这个月的天数，用 `startOf、endOf` 可以拿到这个月的第一天和最后一天的日期。

## Calendar 组件

创建 src/Calendar/index.tsx

```tsx
import "./index.scss";

function Calendar() {
  return <div className="calendar"></div>;
}

export default Calendar;
```

src/Calendar/index.scss

```scss
.calendar {
  width: 100%;
  height: 200px;
  background: blue;
}
```

这里用到了 scss，需要安装下用到的包：

```bash
npm install --save sass

```

然后在 App.tsx 里引入 Calendar 组件:

```tsx
import Calendar from "./Calendar";

function App() {
  return (
    <div className="App">
      <Calendar></Calendar>
    </div>
  );
}

export default App;
```

组件可以分为 `Header` 和 `MonthCalendar` 两个组件

### MonthCalendar 组件

首先是周日到周六的部分:

src/Calendar/MonthCalendar.tsx

```tsx
function MonthCalendar() {
  const weekList = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

  return (
    <div className="calendar-month">
      <div className="calendar-month-week-list">
        {weekList.map((week) => (
          <div className="calendar-month-week-list-item" key={week}>
            {week}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MonthCalendar;
```

src/Calendar/index.scss

```scss
.calendar {
  width: 100%;
}

.calendar-month {
  &-week-list {
    display: flex;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;

    &-item {
      padding: 20px 16px;
      text-align: left;
      color: #7d7d7f;
      flex: 1;
    }
  }
}
```

在 src/Calendar/index.tsx 里引入：

```tsx
import MonthCalendar from "./MonthCalendar";
import "./index.scss";

function Calendar() {
  return (
    <div className="calendar">
      <MonthCalendar />
    </div>
  );
}

export default Calendar;
```

WeekList 完成：
<ImagePreview src="/calendar/weekList.png" alt="weekList" />
