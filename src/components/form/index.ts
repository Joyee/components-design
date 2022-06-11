import { App } from 'vue'
import ElForm from './Form.vue'
import ElFormItem from './FormItem.vue'
import ElInput from './Input.vue'

export default {
  install(app: App) {
    app.component(ElForm.name, ElForm)
    app.component(ElFormItem.name, ElFormItem)
    app.component(ElInput.name, ElInput)
  },
}
