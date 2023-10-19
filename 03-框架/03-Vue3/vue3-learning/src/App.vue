<template>
  <h1>博主的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>职业： {{ job.type }}</h2>
  <h2>工资：{{ job.salary }}</h2>
  <button @click="sayInfo">显示信息</button>
  <button @click="changeInfo">修改信息</button>
</template>

<script setup>
import { ref } from "vue"
// 数据
let name = ref("zhf")
let age = ref(18)
let job = ref({
  type: "前端工程师",
  salary: "30K",
})
// 方法
function sayInfo() {
  alert(`你好${name.value}，你太厉害了吧，薪水${job.value.salary}这么高`)
}
function changeInfo() {
  name.value = "三十年后的zhf"
  age.value = 48;
  job.value.type = "工程师"
  job.value.salary = "200K"
}
</script>