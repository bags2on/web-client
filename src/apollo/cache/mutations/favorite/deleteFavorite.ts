import { ReactiveVar } from '@apollo/client'

export default (favoriteAmountVar: ReactiveVar<string[]>): ((id: string) => void) => {
  function saveLocal(ids: string[]): void {
    window.localStorage.setItem('favorite', JSON.stringify(ids))
  }

  function deleteId(ids: string[], id: string): string[] {
    return ids.filter((currentID) => currentID !== id)
  }

  return (id: string): void => {
    const ids = favoriteAmountVar()
    const updatedFavorite = deleteId(ids, id)
    favoriteAmountVar([...updatedFavorite])
    saveLocal(updatedFavorite)
  }
}
