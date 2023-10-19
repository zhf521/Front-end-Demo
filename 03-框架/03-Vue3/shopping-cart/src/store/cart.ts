import { defineStore } from 'pinia'
import { buyProducts, type IProduct } from '../api/shop'
import { useProductsStore } from './products'

// {id,title,price,quantity}
type cartProduct = {
  quantity:number
}&Omit<IProduct,'inventory'>

export const useCartStore=defineStore('cart', {
  state: () => {
    return {
      cartProducts: [] as cartProduct[], //购物车 商品列表
      checkoutStatus:null as null|string
    }
  },
  getters: {
    totalPrice(state) {
      return state.cartProducts.reduce((total, item) => {
        return total + item.price*item.quantity
      },0)
    }
  },
  actions: {
    addProductToCart(product: IProduct) {
      if (product.inventory < 1) {
        return
      }
      const cartItem = this.cartProducts.find(item => item.id === product.id)
      if (cartItem) {
        cartItem.quantity++
      } else {
        this.cartProducts.push({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
        })
      }
      const productsStore = useProductsStore()
      productsStore.decrementProduct(product)
    },
    async checkout() {
      const res = await buyProducts()
      this.checkoutStatus = res ? '成功' : '失败'
      if (res) {
        this.cartProducts = []
      }
    }
  }
})