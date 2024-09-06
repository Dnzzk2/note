---
description: "迷你 Calendar"
head:
  - - meta
    - name: keywords
      content: 迷你 Calendar，前端，手写组件，React。
  - - link
    - rel: canonical
      content: https://note.dnzzk2.icu/framework/React/mini-calendar
  - - meta
    - property: og:title
      content: 迷你 Calendar，使用React手写迷你日历组件。
  - - meta
    - property: og:description
      content: 迷你 Calendar，使用React手写迷你日历组件。
  - - meta
    - property: og:url
      content: https://note.dnzzk2.icu/framework/React/mini-calendar
---

# 迷你 Calendar

手写 mini-Calendar，实操组件。

## Date

了解一下 [Date API](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) 。

```js
// Fri Aug 09 2024 00:00:00 GMT+0800 (中国标准时间)
new Date(2024, 7, 9);
// toLocaleString() 返回该日期对象的字符串
// 2024/8/9 00:00:00
new Date(2024, 7, 9).toLocaleString();
// 2024/7/31 00:00:00   0为上个月最后一天 -1为倒数第二天
new Date(2024, 7, 0).toLocaleString();
// 获取日 31 可以获取总天数
new Date(2024, 7, 0).getDate();
// 获取星期几，0 为星期日 =>3
new Date(2024, 7, 0).getDay();
// 获取年份 =>2024
new Date(2024, 7, 0).getFullYear();
// 获取月份，0 为一月份 =>6
new Date(2024, 7, 0).getMonth();
```

## 基础布局

App.tsx

```tsx
import React from "react";
import "./styles.css";

function Calendar() {
  return (
    <div className="calendar">
      <div className="header">
        <button>&lt;</button>
        <div>2023 年 7 月</div>
        <button>&gt;</button>
      </div>
      <div className="days">
        <div className="day">日</div>
        <div className="day">一</div>
        <div className="day">二</div>
        <div className="day">三</div>
        <div className="day">四</div>
        <div className="day">五</div>
        <div className="day">六</div>
        <div className="empty"></div>
        <div className="empty"></div>
        <div className="day">1</div>
        <div className="day">2</div>
        <div className="day">3</div>
        <div className="day">4</div>
        <div className="day">5</div>
        <div className="day">6</div>
        <div className="day">7</div>
        <div className="day">8</div>
        <div className="day">9</div>
        <div className="day">10</div>
        <div className="day">11</div>
        <div className="day">12</div>
        <div className="day">13</div>
        <div className="day">14</div>
        <div className="day">15</div>
        <div className="day">16</div>
        <div className="day">17</div>
        <div className="day">18</div>
        <div className="day">19</div>
        <div className="day">20</div>
        <div className="day">21</div>
        <div className="day">22</div>
        <div className="day">23</div>
        <div className="day">24</div>
        <div className="day">25</div>
        <div className="day">26</div>
        <div className="day">27</div>
        <div className="day">28</div>
        <div className="day">29</div>
        <div className="day">30</div>
        <div className="day">31</div>
      </div>
    </div>
  );
}

export default Calendar;
```

styles.css

```css
.calendar {
  border: 1px solid #aaa;
  padding: 10px;
  width: 300px;
  height: 250px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
}

.days {
  display: flex;
  flex-wrap: wrap;
}

.empty,
.day {
  width: calc(100% / 7);
  text-align: center;
  line-height: 30px;
}

.day:hover {
  background-color: #ccc;
  cursor: pointer;
}
```
