<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入姓名" v-model="user.name">
    <input type="text" placeholder="请输入年龄" v-model="user.age">
    <button @click="ADD_USER(user)">添加用户</button>
    <button @click="addUserByServer">从服务器获取并添加</button>
    <ul>
      <li v-for="u in userList" :key="u.id">{{ u.name }} - {{ u.age }}</li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  name: 'User',
  data() {
    return {
      user: {
        name: '',
        age: '',
      }
    };
  },
  methods: {
    ...mapMutations(['ADD_USER']),
    ...mapActions(['addUserByServer'])
  },
  computed: {
    ...mapState(['userList'])
  }
};
</script>
<style scoped></style>
