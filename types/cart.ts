export type Cart = {
    id: number
    userId: number
    date: string
    products: CartProduct[]
    __v: number
  }
  
  export type CartProduct = {
    productId: number
    quantity: number
  }