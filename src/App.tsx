import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './utils/routes'
import RootLayout from './components/RootLayout/RootLayout'
import Fallback from './common/Fallback'

const Login = lazy(() => import('./pages/Login/Login'))
const Home = lazy(() => import('./pages/Home/Home'))

const App: React.FC = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <RootLayout>
        <Switch>
          <Route path={routes.login} component={Login} />
          <Route path={routes.root} component={Home} />
        </Switch>
      </RootLayout>
    </Suspense>
  )
}

export default App
