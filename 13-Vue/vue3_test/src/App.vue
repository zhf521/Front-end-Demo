<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h3>工作种类：{{ person.job.type }}</h3>
  <h3>工作薪水：{{ person.job.salary }}</h3>
  <h4>个人爱好：{{ person.hobby }}</h4>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'App',
  setup() {
    //数据
    let person = reactive({

      name: '张三',
      age: 18,
      job: {
        type: '前端工程师',
        salary: '30K'
      },
      hobby: ['唱', '跳', 'rap']
    })
    //方法
    function changeInfo() {
      person.name = '李四'
      person.age = 38
      person.job.type = 'UI设计师'
    }
    //返回一个对象（常用）
    return {
      person,
      changeInfo,
    }
  }
}
</script>
