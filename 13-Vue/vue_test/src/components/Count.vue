<template >
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍为：{{ bigSum }}</h3>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
    <h3>下方组件的总人数是：{{ personList.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>
<script>
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      n: 1,//用户选择的数字
    }
  },
  methods: {
    ...mapMutations({ increment: 'JIA', decrement: 'JIAN' }),
    ...mapActions({ incrementOdd: 'jiaOdd', incrementWait: 'jiaWait' }),
  },
  computed: {
    ...mapState(['sum', 'school', 'subject','personList']),
    ...mapGetters({ bigSum: 'bigSum' })
  },
  mounted() {
  }
}
</script>
<style>
button {
  margin: 5px;
}
</style>