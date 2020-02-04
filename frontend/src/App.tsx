import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './utils/routes'
import ScaleLoader from './common/loaders/ScaleLoader'
import RootLayout from './components/RootLayout/RootLayout'

const Login = lazy(() => import('./pages/Login/Login'))
const Home = lazy(() => import('./pages/Home/Home'))

const App: React.FC = () => {
  return (
    <Suspense fallback={<ScaleLoader fallback />}>
      <RootLayout>
        <Switch>
          <Route path={routes.signin} component={Login} />
          <Route path={routes.root} component={Home} />
        </Switch>
      </RootLayout>
    </Suspense>
  )
}

export default App
