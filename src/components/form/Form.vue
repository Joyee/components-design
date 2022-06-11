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
import { FormItem, key } from './type'
import { emitter } from '../../emitter'

const props = defineProps({
  model: {
    type: Object,
    required: true,
  },
  rules: {
    type: Object as PropType<Rules>,
  },
})

const items = ref<FormItem[]>([])

emitter.on('addFormItem', (item) => {
  items.value.push(item)
})

// 提供一个检查所有输入项的 validate 方法
function validate(cb: (isValid: boolean) => void) {
  const tasks = items.value.map((item) => item.validate())
  Promise.all(tasks)
    .then(() => {
      cb(true)
    })
    .catch(() => {
      cb(false)
    })
}

provide(key, {
  model: props.model,
  rules: props.rules,
})

defineExpose({
  validate,
})
</script>

<style lang="scss">
@import '../styles/mixin.scss';
@include b(form) {
  box-sizing: border-box;
  margin-top: 20px;
  width: 300px;
  flex-shrink: 0;
}
</style>
