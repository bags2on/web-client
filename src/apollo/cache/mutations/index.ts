import syncCart from './cart/syncCart'
import addProduct from './cart/addProduct'
import removeProduct from './cart/removeProduct'
import updateProductAmount from './cart/updateProductAmount'
import updateCartPrice from './cart/updateCartPrice'
import clearCart from './cart/clearCart'

import { cartItemsVar, cartPriceVar } from '../cache'

export const CartMutations = {
  addProduct: addProduct(cartItemsVar),
  syncCart: syncCart(cartItemsVar),
  clearCart: clearCart(cartItemsVar),
  removeProduct: removeProduct(cartItemsVar),
  updateProductAmount: updateProductAmount(cartItemsVar),
  updateCartPrice: updateCartPrice(cartPriceVar)
}
