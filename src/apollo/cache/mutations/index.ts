import { syncCart, addProduct, removeProduct, updateProductAmount, updateCartPrice, clearCart } from './cart'
import { addToFavorite, syncFavorite, deleteFavorite, clearAll } from './favorite'
import { checkAuthentication, closeAuthModal } from './shared'

import { cartItemsVar, cartPriceVar, favoriteProductsVar, authModalVar, isAuthenticatedVar } from '../variables'

export const CartMutations = {
  addProduct: addProduct(cartItemsVar),
  syncCart: syncCart(cartItemsVar),
  clearCart: clearCart(cartItemsVar),
  removeProduct: removeProduct(cartItemsVar),
  updateProductAmount: updateProductAmount(cartItemsVar),
  updateCartPrice: updateCartPrice(cartPriceVar)
}

export const FavoriteMutations = {
  addToFavorite: addToFavorite(favoriteProductsVar),
  syncFavorite: syncFavorite(favoriteProductsVar),
  deleteFavorite: deleteFavorite(favoriteProductsVar),
  clearAll: clearAll(favoriteProductsVar)
}

export const SharedMutations = {
  checkAuthentication: checkAuthentication(isAuthenticatedVar, authModalVar),
  closeAuthModal: closeAuthModal(authModalVar)
}
