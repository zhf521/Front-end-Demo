<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add" />
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  name: 'MyHeader',
  data() {
    return {
      title: ''	// 收集用户输入的title
    }
  },
  methods: {
    add() {
      //校验数据
      if (!this.title.trim()) return alert('输入不能为空')
      //将用户的输入包装成一个todo对象
      const todoObj = { id: nanoid(), title: this.title, done: false }
      //通知App组件去添加一个todo对象
      this.$emit('addTodo', todoObj)
      //清空输入
      this.title = ''
    }
  },
}
</script>