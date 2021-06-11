import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './utils/routes'
import RootLayout from './components/RootLayout/RootLayout'
import Fallback from './shared/Fallback'

const Home = lazy(() => import('./pages/Home'))
const Catalog = lazy(() => import('./pages/Catalog/Catalog'))
const Product = lazy(() => import('./pages/Product'))
const Profile = lazy(() => import('./pages/Profile'))
const NoMatchPage = lazy(() => import('./pages/NoMatchPage'))

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
          <Route exact path={routes.product} component={Product} />
          <Route exact path={routes.profile} component={Profile} />
          <Route component={NoMatchPage} />
        </Switch>
      </RootLayout>
    </Suspense>
  )
}

export default App
