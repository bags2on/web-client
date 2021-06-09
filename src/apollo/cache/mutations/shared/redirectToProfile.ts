import { ReactiveVar } from '@apollo/client'
import routes from '../../../../utils/routes'
import history from '../../../../utils/history'

export default (isAuthenticatedVar: ReactiveVar<boolean>, authModalVar: ReactiveVar<boolean>): (() => boolean) => {
  return (): boolean => {
    const isAuthenticated = isAuthenticatedVar()

    if (!isAuthenticated) {
      authModalVar(true)
      return isAuthenticated
    }

    history.push(routes.profile)

    return isAuthenticated
  }
}
