import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './utils/routes'
import RootLayout from './components/RootLayout/RootLayout'
import Fallback from './common/Fallback'

const Login = lazy(() => import('./pages/Login'))
const Home = lazy(() => import('./pages/Home'))
const Catalog = lazy(() => import('./pages/Catalog'))
const ProductDetails = lazy(() => import('./pages/ProductDetails'))

interface AppProps {
  themeChanger(checked: boolean): void
}

const App: React.FC<AppProps> = ({ themeChanger }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <RootLayout themeChanger={themeChanger}>
        <Switch>
          <Route exact path={routes.root} component={Home} />
          <Route path={routes.catalog} component={Catalog} />
          <Route path={routes.login} component={Login} />
          <Route exact path={routes.product} component={ProductDetails} />
        </Switch>
      </RootLayout>
    </Suspense>
  )
}

export default App
