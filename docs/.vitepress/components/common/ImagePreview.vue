<script setup lang="ts">
import { ref } from "vue";
import type { CSSProperties } from "vue";
import { withBase } from "vitepress";

interface Props {
  src: string;
  alt: string;
  width?: string;
  style?: CSSProperties;
}
const props = defineProps<Props>();

const rotation = ref(0);
const scale = ref(0.8);
const opacity = ref(0);
const bottom = ref(0);
const translateX = ref(0);
const translateY = ref(0);
const startX = ref(0);
const startY = ref(0);
const isDrag = ref(false);

const overlayVisible = ref(false);

// 打开
const openOverlay = () => {
  overlayVisible.value = true;
  setTimeout(() => {
    scale.value = 1;
    opacity.value = 1;
    bottom.value = 40;
  }, 0);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeOverlay();
    }
  });
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = "6px";
};

// 关闭
const closeOverlay = () => {
  scale.value = 0.8;
  opacity.value = 0;
  bottom.value = 0;
  // 等待动画执行完毕
  setTimeout(() => {
    overlayVisible.value = false;
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    rotation.value = 0;
  }, 160);
};

// 旋转图片
const rotateImage = (deg: number) => {
  rotation.value = rotation.value + deg;
};

// 放大
const zoomIn = () => {
  scale.value = Math.min(scale.value + 0.1, 3);
};

// 缩小
const zoomOut = () => {
  scale.value = Math.max(scale.value - 0.1, 0.5);
};

// 还原
const zoom = () => {
  scale.value = 1;
};

// 开始拖拽
const mouseDown = (e: MouseEvent) => {
  startX.value = e.clientX;
  startY.value = e.clientY;
  isDrag.value = true;
  window.addEventListener("mousemove", mouseMove);
  window.addEventListener("mouseup", mouseUp);
};

// 移动图片
const mouseMove = (e: MouseEvent) => {
  if (isDrag.value) {
    translateX.value = e.clientX - startX.value;
    translateY.value = e.clientY - startY.value;
  }
};

// 鼠标松开
const mouseUp = (e: MouseEvent) => {
  isDrag.value = false;
  translateX.value = 0;
  translateY.value = 0;
  startX.value = 0;
  startY.value = 0;
  window.removeEventListener("mousemove", mouseMove);
  window.removeEventListener("mouseup", mouseUp);
};

// 双击放大和还原
const doubleClick = () => {
  scale.value = scale.value === 1 ? 1.5 : 1;
};
</script>

<template>
  <div class="imgOutBox" @click="openOverlay">
    <img
      :src="withBase(props.src)"
      :alt="props.alt"
      :width="props.width"
      :style="props.style"
    />
  </div>
  <Teleport to="body">
    <div v-if="overlayVisible" class="preview-container">
      <div
        class="preview-overlay"
        @click="closeOverlay"
        :style="{
          opacity: opacity,
          transition: 'opacity 0.3s ease',
        }"
      ></div>
      <div
        class="preview-tool"
        :style="{
          opacity: opacity,
          transition: 'all 0.3s ease',
          bottom: `${bottom}px`,
        }"
      >
        <div class="preview-tool-icon" @click="rotateImage(-90)">
          <i class="i-ic:outline-rotate-90-degrees-ccw"></i>
        </div>
        <div class="preview-tool-icon" @click="rotateImage(90)">
          <i class="i-ic:outline-rotate-90-degrees-cw"></i>
        </div>
        <div class="preview-tool-icon" @click="zoom">
          <i class="i-ic:outline-center-focus-weak"></i>
        </div>
        <div class="preview-tool-icon" @click="zoomIn">
          <i class="i-ic:outline-add-circle-outline"></i>
        </div>
        <div class="preview-tool-icon" @click="zoomOut">
          <i class="i-ic:outline-remove-circle-outline"></i>
        </div>
        <div class="preview-tool-icon" @click="closeOverlay">
          <i class="i-ic:outline-close"></i>
        </div>
      </div>
      <div class="preview-wrapper">
        <img
          :src="withBase(props.src)"
          :alt="props.alt"
          class="preview-img"
          :style="{
            transform: `translate(${translateX}px, ${translateY}px) rotate(${rotation}deg) scale(${scale}) `,
            opacity: opacity,
            transition: isDrag ? 'none' : 'all 0.3s ease',
          }"
          draggable="false"
          @mousedown="mouseDown"
          @dblclick="doubleClick"
        />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.imgOutBox {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
}

.preview-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  display: flex;
}

.preview-overlay {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.preview-tool {
  z-index: 1;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 48px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.35);
  border-radius: 24px;
  color: white;
}

.preview-tool-icon {
  padding: 0 8px;
  font-size: 28px;
  cursor: pointer;
}

.preview-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  pointer-events: none;
}

.preview-img {
  pointer-events: all;
  user-select: none;
  margin: auto;
  cursor: grab;
  -webkit-user-select: none;
  max-height: calc(100vh - 32px);
  max-width: calc(100vw - 32px);
  transform-origin: center center;
}
</style>
