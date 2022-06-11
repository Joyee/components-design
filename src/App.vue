<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <el-button type="primary">primary</el-button>
      <el-button type="success">success</el-button>
      <el-button type="danger">danger</el-button>

      <h2>=======Form=======</h2>
      <el-form :model="formData" :rules="rules" ref="myForm">
        <el-form-item prop="name" label="用户名">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login"> 登 录 </el-button>
        </el-form-item>
      </el-form>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { FormType } from './components/form/type'

const formData = reactive({
  name: '',
})
const rules = reactive({
  name: [{ required: true, message: '不能为空' }],
})

const myForm = ref<FormType>()
const login = () => {
  myForm.value?.validate((isValid) => {
    if (isValid) {
      console.log('====', formData)
    } else {
      alert('输入错误')
    }
  })
}
</script>

<style lang="scss">
.el-container {
  height: 500px;
}
</style>
