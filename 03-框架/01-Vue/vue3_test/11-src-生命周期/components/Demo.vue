<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我加一</button>
</template>

<script>
import {
  ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted
} from "vue"
export default {
  name: "Demo",
  setup() {
    //数据
    let sum = ref(0)
    //通过组合式API的形式去使用生命周期钩子
      onBeforeMount(() => {
        console.log('---onBeforeMount---')
      }),
      onMounted(() => {
        console.log('---onMounted---')
      }),
      onBeforeUpdate(() => {
        console.log('---onBeforeUpdate---')
      }),
      onUpdated(() => {
        console.log('---onUpdated---')
      }),
      onBeforeUnmount(() => {
        console.log('---onBeforeUnmount---')
      }),
      onUnmounted(() => {
        console.log('---onUnmounted---')
      })
    return { sum }
  },
  //通过配置项的形式使用生命周期钩子
  /*beforeCreate() {
    console.log('---beforeCreate---')
  },
  created() {
    console.log('---Created---')

  },
  beforeMount() {
    console.log('---beforeMount---')
  },
  mounted() {
    console.log('---mounted---')
  },
  beforeUpdate() {
    console.log('---beforeUpdate---')
  },
  updated() {
    console.log('---Updated---')
  },
  beforeUnmount() {
    console.log('---beforeUnmount---')
  },
  unmounted() {
    console.log('---unmounted---')
  },*/

}
</script>