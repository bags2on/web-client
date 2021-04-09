import addProduct from './cart/addProduct'
import syncCart from './cart/syncCart'
import clearCart from './cart/clearCart'

import { cartItemsVar } from '../cache'

export const CartMutations = {
  addProduct: addProduct(cartItemsVar),
  syncCart: syncCart(cartItemsVar),
  clearCart: clearCart(cartItemsVar)
}
