import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './utils/routes'
import ScaleLoader from './common/loaders/ScaleLoader'

const Login = lazy(() => import('./pages/Login/Login'))
const TempHome = lazy(() => import('./pages/TempHome'))

const App: React.FC = () => {
  return (
    <Suspense fallback={<ScaleLoader fallback />}>
      <Switch>
        <Route path={routes.signin} component={Login} />
        <Route path={routes.root} component={TempHome} />
      </Switch>
    </Suspense>
  )
}

export default App
