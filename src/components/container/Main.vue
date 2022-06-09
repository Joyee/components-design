<template>
  <main class="el-main">
    <slot />
  </main>
</template>

<script lang="ts">
export default {
  name: 'ElMain'
}
</script>

<script setup lang="ts">
</script>

<style lang="scss">
@import '../styles/mixin.scss';
@include b(main) {
  box-sizing: border-box;
  flex: 1;
  display: block;
  flex-basis: auto;
  overflow: auto;
  padding: $--main-padding;
}
</style>