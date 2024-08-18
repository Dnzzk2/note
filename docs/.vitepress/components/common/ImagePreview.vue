<script setup lang="ts">
import { ref } from "vue";

interface Props {
  src: string;
  alt: string;
}
const { src, alt } = defineProps<Props>();

const isPreview = ref(false);

const openOverlay = () => {
  isPreview.value = true;
};

const closeOverlay = () => {
  isPreview.value = false;
};
</script>

<template>
  <!-- 图片本层 -->
  <div class="imgOutBox" @click="openOverlay">
    <img :src="src" :alt="alt" />
  </div>
  <!-- 预览 -->
  <Teleport to="body">
    <div v-if="isPreview" class="preview-container">
      <div class="preview-overlay" @click="closeOverlay"></div>
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
  background-color: #fff;
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
