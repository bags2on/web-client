import { ReactiveVar } from '@apollo/client'

export default (favoriteProductsVar: ReactiveVar<string[]>): (() => void) => {
  return (): void => {
    const data = JSON.parse(window.localStorage.getItem('favorite') || '[]')
    favoriteProductsVar([...data])
  }
}
