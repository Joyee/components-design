import Button from './Button.vue'
import { mount } from '@vue/test-utils'
describe('按钮测试', () => {
  test('按钮能够显示文本', () => {
    const content = '这是按钮默认内容'
    const wrapper = mount(Button, {
      slots: {
        default: content
      }
    })
    expect(wrapper.text()).toBe(content) // wrapper.text()获取到文本内容
  })
  test('通过size属性控制大小', () => {
    const size = 'small'
    const wrapper = mount(Button, {
      props: {
        size
      }
    })
    expect(wrapper.classes()).toContain('el-button--small')
  })
})