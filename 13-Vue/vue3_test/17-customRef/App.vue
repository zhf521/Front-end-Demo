<template>
  <input type="text" v-model="keyWord">
  <h3>{{ keyWord }}</h3>
</template>
<script>
import { ref, customRef } from 'vue'
export default {
  name: "App",
  setup() {
    //自定义一个ref--名为：myRef
    function myRef(value) {
      //console.log('--myRef--',value) 
      let timer
      return customRef((track, trigger) => {
        return {
          get() {
            track()
            return value
          },
          set(newValue) {
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              trigger()//通知Vue去重新解析模板
            }, 1000)
          }
        }
      })
    }
    //let keyWord = ref('Hello')//使用vue提供的ref
    let keyWord = myRef('Hello')//使用程序员自定义的ref
    return { keyWord }
  }
}
</script>

<style></style>