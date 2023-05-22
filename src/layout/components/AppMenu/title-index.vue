<template>
  <span v-show="!$store.state.isCollapse">{{ props }}</span>
</template>
<script setup lang="ts">
import { PropType } from 'vue'
const props = defineProps({
  modelValue: {
    type: String as PropType<String> || undefined,
    default: () => ''
  }
})
</script>
