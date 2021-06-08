import { ReactiveVar } from '@apollo/client'

export default (authModalVar: ReactiveVar<boolean>): (() => void) => {
  return (): void => {
    authModalVar(false)
  }
}
