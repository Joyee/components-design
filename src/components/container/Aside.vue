<template>
  <aside class="el-aside" :style="{ width }">
    <slot />
  </aside>
</template>

<script lang="ts">
export default {
  name: 'ElAside'
}
</script>

<script setup lang="ts">
import { withDefaults } from 'vue'

interface Props {
  width: string
}
withDefaults(defineProps<Props>(), {
  width: '300px'
})
</script>

<style lang="scss">
@import '../styles/mixin.scss';
@include b(aside) {
  box-sizing: border-box;
  overflow: auto;
  flex-shrink: 0;
}
</style>