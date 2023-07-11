import { defineStore } from 'pinia'

// 1. 定义并导出容器
// 参数1：容器的ID
export const useMainStore = defineStore('main', {
  // 类似于组件的data
  state: () => {
    return {
      count:100
    }
  },
  // 类似于computed
  getters: {},
  // 类似于methods
  actions:{}
})
// 2. 使用容器中的state
// 3. 修改 state
// 4. 容器中的 action 的使用