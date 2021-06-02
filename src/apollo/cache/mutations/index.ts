import { syncCart, addProduct, removeProduct, updateProductAmount, updateCartPrice, clearCart } from './cart'
import { addToFavorite, syncFavorite, deleteFavorite } from './favorite'

import { cartItemsVar, cartPriceVar, favoriteAmountVar } from '../cache'

export const CartMutations = {
  addProduct: addProduct(cartItemsVar),
  syncCart: syncCart(cartItemsVar),
  clearCart: clearCart(cartItemsVar),
  removeProduct: removeProduct(cartItemsVar),
  updateProductAmount: updateProductAmount(cartItemsVar),
  updateCartPrice: updateCartPrice(cartPriceVar)
}

export const FavoriteMutations = {
  addToFavorite: addToFavorite(favoriteAmountVar),
  deleteFavorite: deleteFavorite(favoriteAmountVar),
  syncFavorite: syncFavorite(favoriteAmountVar)
}
