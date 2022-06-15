<template>
  <div :style="fontStyle">
    <div class="rate" @mouseout="mouseOut">
      <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
      <span class="hollow" :style="fontwidth">
        <span
          v-for="num in 5"
          :key="num"
          @click="onRate(num)"
          @mouseover="mouseOver(num)"
          >★</span
        >
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps({
  modelValue: Number,
  theme: { type: String, default: 'orange' },
})
// 评分宽度
let width = ref(props.modelValue)

type stringKey = Record<string, unknown>

const themeObj: stringKey = {
  black: '#00',
  white: '#fff',
  red: '#f5222d',
  orange: '#fa541c',
  yellow: '#fadb14',
  green: '#73d13d',
  blue: '#40a9ff',
}

const fontStyle = computed(() => {
  return `color:${themeObj[props.theme]};`
})
const fontwidth = computed(() => `width: ${width.value}em;`)

const mouseOver = (i: number) => {
  width.value = i
}
const mouseOut = () => {
  width.value = props.modelValue
}

const emits = defineEmits(['update:modelValue'])
const onRate = (num: number) => {
  emits('update:modelValue', num)
}
</script>

<style scoped lang="scss">
.rate {
  position: relative;
  display: inline-block;
}
.rate > span.hollow {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
}
</style>
