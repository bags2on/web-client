interface RoutesMap {
  [name: string]: string
}

const routes: RoutesMap = {
  login: '/login',
  root: '/',
  catalog: '/catalog/:page?',
  product: '/:id',
  cart: '/cart'
}

export default routes
