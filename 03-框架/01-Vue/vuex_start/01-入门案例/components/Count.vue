<template>
  <div>
    <h1>当前求和为：{{ $store.state.sum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: 'Count',
  data() {
    return {
      n: 1, //用户选择的数字
      // sum:0 //当前的和
    };
  },
  methods: {
    increment() {
      // this.sum += this.n
      // this.$store.dispatch('add',this.n);
      this.$store.commit('ADD', this.n);
    },
    decrement() {
      // this.sum -= this.n
      // this.$store.dispatch('sub',this.n);
      this.$store.commit('SUB', this.n);
    },
    incrementOdd() {
      // if(this.sum % 2){
      //   this.sum += this.n
      // }

      // if (this.$store.state.sum % 2) {
      //   this.$store.dispatch('add', this.n);
      // }
      this.$store.dispatch('addOdd', this.n);
    },
    incrementWait() {
      // setTimeout(() => {
      //   // this.sum += this.n
      //   this.$store.dispatch('add', this.n);
      // }, 500);
      this.$store.dispatch('addWait', this.n);
    },
  },
};
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>
