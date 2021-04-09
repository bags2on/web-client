import addProduct from './cart/addProduct'
import syncCart from './cart/syncCart'

import { cartItemsVar } from '../cache'

export const CartMutations = {
  addProduct: addProduct(cartItemsVar),
  syncCart: syncCart(cartItemsVar)
}
