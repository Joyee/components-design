<template>
  <div>
    <input :value="modelValue" @input="onInput" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ElInput',
}
</script>

<script setup lang="ts">
import { emitter } from '../../emitter'

defineProps<{
  modelValue: string
}>()

const emits = defineEmits(['update:modelValue'])
function onInput(e: Event) {
  const input = e.target as HTMLInputElement
  emits('update:modelValue', input.value)
  emitter.emit('validate')
}
</script>

<style lang="scss">
@import '../styles/mixin';
@include b(input) {
  @include m(inner) {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
  }
}
</style>
