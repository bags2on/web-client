interface RoutesMap {
  [name: string]: string
}

const routes: RoutesMap = {
  root: '/',
  catalog: '/catalog',
  product: '/p/:id',
  login: '/login',
  discounts: '/discounts',
  profile: '/profile',
  favorite: '/profile/favorite',
  profileInfo: '/profile/info',
  notFound: '/404'
}

export default routes
