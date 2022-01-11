import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import RootLayout from './components/RootLayout/RootLayout'
import Fallback from './shared/Fallback'

const Home = lazy(() => import('./pages/Home'))
const Catalog = lazy(() => import('./pages/Catalog/Catalog'))
const Product = lazy(() => import('./pages/Product'))
const Profile = lazy(() => import('./pages/Profile'))
const NoMatchPage = lazy(() => import('./pages/NoMatchPage'))
const Terms = lazy(() => import('./pages/Terms'))
const Checkout = lazy(() => import('./pages/Checkout'))

interface AppProps {
  themeChanger(checked: boolean): void
}

const App: React.FC<AppProps> = ({ themeChanger }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <RootLayout themeChanger={themeChanger}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/catalog/:page?" component={Catalog} />
          <Route exact path="/p/:id" component={Product} />
          <Route exact path="/profile/:tabName?" component={Profile} />
          <Route exact path="/terms/:tabName?" component={Terms} />
          <Route exact path="/checkout" component={Checkout} />
          <Route path="/404" component={NoMatchPage} />
          <Redirect to="/404" />
        </Switch>
      </RootLayout>
    </Suspense>
  )
}

export default App
