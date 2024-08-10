---
description: "迷你 Calendar"
head:
  - - meta
    - name: keywords
      content: 迷你 Calendar
  - - link
    - rel: canonical
      content: https://note.dnzzk2.icu/framework/React/mini-calendar
  - - meta
    - property: og:title
      content: 迷你 Calendar
  - - meta
    - property: og:description
      content: 迷你 Calendar
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
