# CSS 中的 flex 和 inline-flex

`display:flex` 和 `display:inline-flex` 都是用于生成弹性盒子布局，只是生成的盒子布局**特性不同**。

## 特性

`display:flex` ：生成的布局，具备与块级元素相同的特性，也就是

- 高度，行高以及外边距和内边距都可控制。
- 默认宽度为父容器的 100%，占据一行。

---

`display:inline-flex` ：生成的布局，具备与行内块元素相同的特性，也就是

- 高度，行高以及外边距和内边距都可控制。
- 默认宽度由内容决定，而不是占满父容器，不独占一行。
- 可以与其他行内元素并排显示。

## 换行行为

换行行为均由`flex-warp`属性控制。

## 例子

### Flex 布局

<br/>
<div class="flex">
    <div class="flex-item">item</div>
    <div class="flex-item">item</div>
</div>

<style>

    .flex {
        display: flex;
        background-color: var(--template-bg-color);
        color: var(--template-text-color);
    }
    .flex-item {
        background-color: var(--template-item-bg-color);
        margin: 5px;
        padding: 10px;
    }

</style>

::: code-group

```html [html]
<div class="flex">
  <div class="flex-item">item</div>
  <div class="flex-item">item</div>
</div>
```

```css [css] {2}
.flex {
  display: flex;
  background-color: var(--template-bg-color);
  color: var(--template-text-color);
}
.flex-item {
  background-color: var(--template-item-bg-color);
  margin: 5px;
  padding: 10px;
}
```

:::

### inline-flex 布局

<br/>
<div class="inline-flex">
    <div class="flex-item">item</div>
    <div class="flex-item">item</div>
</div>
<span class="flex-item">item</span>

<style>
    .inline-flex {
        display: inline-flex;
        background-color: var(--template-bg-color);
        color: var(--template-text-color);
        height: 80px;
    }
    .flex-item {
        background-color: var(--template-item-bg-color);
        margin: 5px;
        padding: 10px;
    }
</style>

::: code-group

```html [html]
<div class="inline-flex">
  <div class="flex-item">item</div>
  <div class="flex-item">item</div>
</div>
<span class="flex-item">item</span>
```

```css [css] {2}
.inline-flex {
  display: inline-flex;
  background-color: var(--template-bg-color);
  color: var(--template-text-color);
  height: 80px;
}
.flex-item {
  background-color: var(--template-item-bg-color);
  margin: 5px;
  padding: 10px;
}
```

:::

## 总结

flex 生成的布局具备块元素特性，inline-flex 具备行内块元素特性。
