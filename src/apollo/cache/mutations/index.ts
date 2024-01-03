import { addToFavorite, syncFavorite, deleteFavorite, clearAll } from './favorite'
import { checkAuthentication, closeAuthModal } from './shared'

import { favoriteProductsVar, authModalVar, isAuthenticatedVar } from '../variables'

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
