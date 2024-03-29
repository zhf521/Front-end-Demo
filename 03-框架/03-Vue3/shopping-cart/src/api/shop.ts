/**
 * src/api/shop.ts
 * Mocking client-server processing
 */


export interface IProduct {
  id: number
  title: string
  price: number
  inventory: number // 库存
}

const _products: IProduct[] = [
  {id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2},
  {id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10},
  {id: 3, title: 'Charli XCX -Sucker CD', price: 19.99, inventory: 5}
]

export const getProducts = async () => {
  await wait(1000)
  return _products
}

export const buyProducts = async () => {
  await wait(1000)
  return Math.random() > 0.5
}

/**
 * 封装了Promise版本的定时器
 * @param delay 延迟时间
 * @returns Promise
 */
async function wait(delay:number) {
  return new Promise(resolve => setTimeout(resolve, delay))
}