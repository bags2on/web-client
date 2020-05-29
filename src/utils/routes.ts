interface RoutesMap {
  [name: string]: string
}

const routes: RoutesMap = {
  login: '/login',
  root: '/',
  catalog: '/catalog',
  product: '/:id'
}

export default routes
