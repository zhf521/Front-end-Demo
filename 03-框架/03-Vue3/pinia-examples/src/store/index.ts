import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => {
    return {
          count: 100,
      foo: 'bar',
        arr:[1,2,3]
    }
  }
})