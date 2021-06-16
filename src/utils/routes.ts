interface RoutesMap {
  [name: string]: string
}

const routes: RoutesMap = {
  login: '/login',
  root: '/',
  catalog: '/catalog/:page?',
  allCatalog: '/catalog',
  product: '/p/:id',
  discounts: '/discounts',
  profile: '/profile/:tabName?',
  notFound: '/404'
}

export default routes
