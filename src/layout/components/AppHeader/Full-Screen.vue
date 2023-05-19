<template>
  <el-icon size="20px" @click="handleFull"><FullScreen /></el-icon>
</template>
<script setup lang="ts">
function handleFull () {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}
</script>
