type RouteName =
  | 'root'
  | 'catalog'
  | 'product'
  | 'login'
  | 'discounts'
  | 'profile'
  | 'profileFavorite'
  | 'profileInfo'
  | 'checkout'
  | 'notFound'

export const routeNames: Record<RouteName, string> = {
  root: '/',
  catalog: '/catalog',
  product: '/product/:id',
  login: '/login',
  discounts: '/discounts',
  profile: '/profile',
  profileFavorite: '/profile/favorite',
  profileInfo: '/profile/info',
  checkout: '/checkout',
  notFound: '/404'
}

export const generateLink = (path: string, id: string): string => path.replace(':id', id)
