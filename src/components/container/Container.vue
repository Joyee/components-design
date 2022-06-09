<template>
  <section class="el-container" :class="{ 'is-vertical': isVertical }">
    <slot />
  </section>
</template>

<script lang="ts">
export default {
  name: 'ElContainer'
}
</script>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import type { VNode, Component } from 'vue'

interface Props {
  direction?: string // vertical: 垂直， horizontal: 水平
}

const props = defineProps<Props>()

const slots = useSlots()

const isVertical = computed(() => {
  if (props.direction === 'vertical') {
    return true
  } else if (props.direction === 'horizontal') {
    return false
  }
  // 如果 slots中存在 ElHeader/ElFooter 则是垂直方向
  if (slots && slots.default) {
    const vNodes: VNode[] = slots.default()
    return vNodes.some((vnode) => {
      const tag = (vnode.type as Component).name
      return tag === 'ElHeader' || tag === 'ElFooter'
    })
  }
  return false
})
</script>

<style lang="scss">
@import '../styles/mixin.scss';
@include b(container) {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;

  @include when(vertical) {
    flex-direction: column;
  }
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  background-color: #d3dce6;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
