<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <h2>你的评分：{{ score }}</h2>
      <Rate v-model="score" @update:model-value="update" />
      <el-button type="primary">primary</el-button>
      <el-button type="success">success</el-button>
      <el-button type="danger">danger</el-button>

      <el-form ref="myForm" :model="model" :rules="rules">
        <el-form-item label="用户名：" prop="username">
          <el-input v-model="model.username" />
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input v-model="model.password" type="password" />
        </el-form-item>
        <br />
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
import { FormType } from './components/form/types'
import Rate from './components/Rate.vue'

let score = ref(3)

function update(num: number) {
  score.value = num
}

const model = reactive({
  username: '',
  password: '',
})
const rules = reactive({
  username: [{ required: true, message: '请输入用户名！' }],
  password: [{ required: true, message: '请输入密码！' }],
})

const myForm = ref<FormType>()
const login = () => {
  myForm.value?.validate((isValid) => {
    if (isValid) {
      console.log('校验成功')
    } else {
      alert('请正确填写表单')
    }
  })
}
</script>

<style lang="scss">
.el-container {
  height: 500px;
}
</style>
