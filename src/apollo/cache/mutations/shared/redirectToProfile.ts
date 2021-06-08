import { ReactiveVar } from '@apollo/client'
import routes from '../../../../utils/routes'
import history from '../../../../utils/history'

export default (isAuthenticatedVar: ReactiveVar<boolean>, authModalVar: ReactiveVar<boolean>): (() => void) => {
  return (): void => {
    const isAuthenticated = isAuthenticatedVar()

    if (!isAuthenticated) {
      authModalVar(true)
      return
    }

    history.push(routes.profile)
  }
}
