import { ReactiveVar } from '@apollo/client'

export default (favoriteProductsVar: ReactiveVar<string[]>): ((id: string) => void) => {
  function saveLocal(ids: string[]): void {
    window.localStorage.setItem('favorite', JSON.stringify(ids))
  }

  function merege(ids: string[], newId: string): string[] {
    const itemIndex = ids.findIndex((id) => id === newId)

    if (itemIndex === -1) {
      ids.push(newId)
    }

    return ids
  }

  return (newID: string): void => {
    const ids = favoriteProductsVar()
    const updatedFavorite = merege(ids, newID)
    favoriteProductsVar([...updatedFavorite])
    saveLocal(updatedFavorite)
  }
}
