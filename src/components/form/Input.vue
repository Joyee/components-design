<template>
  <div class="el-input">
    <input :value="modelValue" class="el-input--inner" @input="onInput" />
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

const emit = defineEmits<{ (e: 'update:model-value', value: string): void }>()

function onInput(e: Event) {
  const input = e.target as HTMLInputElement
  emit('update:model-value', input.value)
  emitter.emit('validate')
}
</script>

<style scoped></style>
