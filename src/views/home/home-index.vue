<template>
  home
  <h1>{{ count }}</h1>
  <div>{{ $store.state.count }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from '../../store/index'
import User from '@/api/user'
const store = useStore()
const count = ref(store.state.count)
console.log(User)
</script>

<style lang="scss" scoped>
h1 {
  color: $color;
}
</style>
