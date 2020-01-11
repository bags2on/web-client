import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './utils/routes'

const Login = lazy(() => import('./pages/Signin/Signin'))
const TempHome = lazy(() => import('./pages/TempHome'))

const App: React.FC = () => {
  return (
    <Suspense fallback={<span>S</span>}>
      <Switch>
        <Route path={routes.signin} component={Login} />
        <Route path={routes.root} component={TempHome} />
      </Switch>
    </Suspense>
  )
}

export default App
