import { ReactiveVar } from '@apollo/client'

export default (favoriteAmountVar: ReactiveVar<string[]>): (() => void) => {
  return (): void => {
    const data = JSON.parse(window.localStorage.getItem('favorite') || '[]')
    favoriteAmountVar([...data])
  }
}
