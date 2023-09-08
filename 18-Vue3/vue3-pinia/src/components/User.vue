<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入姓名" v-model="user.name">
    <input type="text" placeholder="请输入年龄" v-model="user.age">
    <button @click="userStore.add_user(user)">添加用户</button>
    <button @click="userStore.add_user_by_server">从服务器获取并添加</button>
    <ul>
      <li v-for="u in userStore.userList" :key="u.id">{{ u.name }} - {{ u.age }}</li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useUserStore } from '../store/user';

const user = ref({
  name: '',
  age: '',
});
const userStore = useUserStore();

</script>
<style scoped></style>