import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import routes from './utils/routes'
import RootLayout from './components/RootLayout/RootLayout'
import Fallback from './shared/Fallback'

const Home = lazy(() => import('./pages/Home'))
const Catalog = lazy(() => import('./pages/Catalog/Catalog'))
const Product = lazy(() => import('./pages/Product'))
const Profile = lazy(() => import('./pages/Profile'))

interface AppProps {
  themeChanger(checked: boolean): void
}

const isDev = process.env.NODE_ENV === 'development'

const TEMP: React.FC = () => <div />

const App: React.FC<AppProps> = ({ themeChanger }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <RootLayout themeChanger={themeChanger}>
        <Switch>
          <Route exact path={routes.root} component={Home} />
          <Route path={routes.catalog} component={Catalog} />
          <Route exact path={routes.product} component={Product} />
          <Route exact path={routes.profile} component={Profile} />
          {isDev && <Route exact path={'/clear'} component={TEMP} />}
          <Redirect to={routes.root} />
        </Switch>
      </RootLayout>
    </Suspense>
  )
}

export default App
