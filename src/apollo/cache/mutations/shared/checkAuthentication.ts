import { ReactiveVar } from '@apollo/client'

export default (
  isAuthenticatedVar: ReactiveVar<boolean>,
  authModalVar: ReactiveVar<boolean>
): (() => boolean) => {
  return (): boolean => {
    const isAuthenticated = isAuthenticatedVar()

    if (!isAuthenticated) {
      authModalVar(true)
      return isAuthenticated
    }

    return isAuthenticated
  }
}
