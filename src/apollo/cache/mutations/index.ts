import syncCart from './cart/syncCart'
import addProduct from './cart/addProduct'
import removeProduct from './cart/removeProduct'
import clearCart from './cart/clearCart'

import { cartItemsVar } from '../cache'

export const CartMutations = {
  addProduct: addProduct(cartItemsVar),
  syncCart: syncCart(cartItemsVar),
  clearCart: clearCart(cartItemsVar),
  removeProduct: removeProduct(cartItemsVar)
}
