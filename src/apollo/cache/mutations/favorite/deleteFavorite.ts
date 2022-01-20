import { ReactiveVar } from '@apollo/client'

export default (favoriteProductsVar: ReactiveVar<string[]>): ((id: string) => void) => {
  function saveLocal(ids: string[]): void {
    window.localStorage.setItem('favorite', JSON.stringify(ids))
  }

  function deleteId(ids: string[], id: string): string[] {
    return ids.filter((currentID) => currentID !== id)
  }

  return (id: string): void => {
    const ids = favoriteProductsVar()
    const updatedFavorite = deleteId(ids, id)
    favoriteProductsVar([...updatedFavorite])
    saveLocal(updatedFavorite)
  }
}
