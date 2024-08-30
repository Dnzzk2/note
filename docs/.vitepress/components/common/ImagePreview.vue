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

const isPreview = ref(false);
const rotation = ref(0);
const scale = ref(1);
const translateX = ref(0);
const translateY = ref(0);
const startX = ref(0);
const startY = ref(0);
const isDrag = ref(false);

// 打开
const openOverlay = () => {
  isPreview.value = true;
  // 隐藏滚动条-遮罩层全屏，避免滚动条的消失影响内容布局
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = "6px";
};

// 关闭
const closeOverlay = () => {
  isPreview.value = false;
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
  rotation.value = 0;
  scale.value = 1;
};

// 旋转图片
const rotateImage = (deg: number) => {
  rotation.value = rotation.value + deg;
};

// 放大
const zoomIn = () => {
  scale.value = Math.min(scale.value + 0.1, 3); // 每次放大 0.1 倍，最大放大 3 倍
};

// 缩小
const zoomOut = () => {
  scale.value = Math.max(scale.value - 0.1, 0.5); // 每次缩小 0.1 倍，最小缩小到 0.5 倍
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
const doubleClick = (e: MouseEvent) => {
  if (scale.value === 1) {
    scale.value = 1.5;
  } else {
    scale.value = 1;
  }
};
</script>

<template>
  <!-- 图片本层 -->
  <div class="imgOutBox" @click="openOverlay">
    <img
      :src="withBase(props.src)"
      :alt="props.alt"
      :width="props.width"
      :style="props.style"
    />
  </div>
  <!-- 预览 -->
  <Teleport to="body">
    <div v-if="isPreview" class="preview-container">
      <div class="preview-overlay" @click="closeOverlay"></div>
      <div class="preview-tool">
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
            transform: ` translate(${translateX}px, ${translateY}px) rotate(${rotation}deg) scale(${scale}) `,
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
  bottom: 40px;
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
  overflow-clip-margin: content-box;
  overflow: clip;
  transform-origin: center center;
}
</style>
