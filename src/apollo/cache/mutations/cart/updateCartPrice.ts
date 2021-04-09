import { ReactiveVar } from '@apollo/client'

export default (cartPriceVar: ReactiveVar<number>): ((newPrice: number) => void) => {
  return (newPrice: number): void => {
    cartPriceVar(newPrice)
  }
}
