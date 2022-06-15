<template>
  <div class="el-form">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ElForm',
}
</script>

<script setup lang="ts">
import { Rules } from 'async-validator'
import { PropType, provide, ref } from 'vue'
import { emitter } from '../../emitter'
import { FormItem, key } from './types'

const props = defineProps({
  model: { type: Object, required: true },
  rules: { type: Object as PropType<Rules> },
})

provide(key, {
  model: props.model,
  rules: props.rules,
})

const items = ref<FormItem[]>([])

emitter.on('addFormItem', (validate) => {
  items.value.push(validate)
})

function validate(cb: (isValid: boolean) => void) {
  const tasks = items.value.map((item) => item.validate)
  Promise.all(tasks)
    .then(() => {
      cb(true)
    })
    .catch(() => {
      cb(false)
    })
}

defineExpose({ validate })
</script>

<style lang="scss">
@import '../styles/mixin';
@include b(form) {
  margin-top: 20px;
  box-sizing: border-box;
  flex-shrink: 0;
  width: 300px;
}
</style>
