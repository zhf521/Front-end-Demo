import { defineStore } from "pinia"
import { getProducts } from "../api/shop"
import type {IProduct} from '../api/shop'

export const useProductsStore = defineStore('products', {
  state: () => {
    return {
      all:[] as IProduct[] //所有商品列表
    }
  },
  getters: {},
  actions: {
    async loadAllProducts() {
      const res = await getProducts()
      this.all = res
    },
    decrementProduct(product: IProduct) {
      const res = this.all.find(item => item.id === product.id)
      if (res) {
        res.inventory--
      }
    }
  }
})