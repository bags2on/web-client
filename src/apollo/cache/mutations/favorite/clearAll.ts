import { ReactiveVar } from '@apollo/client'

export default (favoriteProductsVar: ReactiveVar<string[]>): (() => void) => {
  function saveLocal(ids: string[]): void {
    window.localStorage.setItem('favorite', JSON.stringify(ids))
  }

  return (): void => {
    favoriteProductsVar([])
    saveLocal([])
  }
}
