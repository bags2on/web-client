import addProduct from './cart/addProduct'
import { cartItemsVar } from '../cache'

export const CartMutations = {
  addProduct: addProduct(cartItemsVar)
}
