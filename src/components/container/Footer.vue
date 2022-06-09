<template>
  <footer class="el-footer" :style="{ height }">
    <slot />
  </footer>
</template>

<script lang="ts">
export default {
  name: 'ElFooter'
}
</script>

<script setup lang="ts">
import { withDefaults } from 'vue'

interface Props {
  height?: string
}

withDefaults(defineProps<Props>(), {
  height: '60px'
})
</script>

<style lang="scss">
@import '../styles/mixin.scss';
@include b(footer) {
  padding: $--footer-padding;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>