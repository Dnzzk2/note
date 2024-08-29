<script setup lang="ts">
import { ref } from "vue";
import type { CSSProperties } from "vue";

interface Props {
  src: string;
  alt: string;
  width?: string;
  style?: CSSProperties;
}
const props = defineProps<Props>();

const isPreview = ref(false);

const openOverlay = () => {
  isPreview.value = true;
  // 隐藏滚动条-遮罩层全屏，避免滚动条的消失影响内容布局
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = "6px";
};

const closeOverlay = () => {
  isPreview.value = false;
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
};
</script>

<template>
  <!-- 图片本层 -->
  <div class="imgOutBox" @click="openOverlay">
    <img
      :src="props.src"
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
        <div class="preview-tool-icon">
          <div class="i-carbon-rotate-clockwise w-[1em] h-[1em]"></div>
        </div>
      </div>
      <div class="preview-wrapper">
        <img :src="src" :alt="alt" class="preview-img" />
      </div>
    </div>
  </Teleport>
</template>

<style>
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
}
</style>
