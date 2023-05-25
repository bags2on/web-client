import React from 'react'
import Badge from '../../../shared/Badge'
import { ReactComponent as HomeIcon } from '../../../assets/svg/icons/home.svg'
import { ReactComponent as UserIcon } from '../../../assets/svg/icons/user.svg'
import { ReactComponent as HeartIcon } from '../../../assets/svg/icons/heart_2.svg'
import { ReactComponent as ListIcon } from '../../../assets/svg/icons/list.svg'
import { ReactComponent as EyeIcon } from '../../../assets/svg/icons/eye.svg'
import routes from '../../../utils/routes'
import history from '../../../utils/history'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@apollo/client'
import { GET_FAVORITE_AMOUNT } from '../../../apollo/cache/queries/favorite'
import { SharedMutations } from '../../../apollo/cache/mutations'

import { NavList, ListItem, ItemIcon, ItemText } from './SidebarNavList.styled'

interface SidebarNavListProps {
  onClose(): void
}

interface DrawerItem {
  icon: React.ElementType
  to: string
  i18n: string
}

const drawerItems: DrawerItem[] = [
  {
    icon: HomeIcon,
    to: routes.root,
    i18n: 'home'
  },
  // {
  //   icon: SaleIcon,
  //   to: '/discounts',
  //   i18n: 'sales'
  // },
  {
    icon: UserIcon,
    to: routes.profile,
    i18n: 'profile'
  },
  {
    icon: HeartIcon,
    to: routes.favorite,
    i18n: 'favorite'
  },

  {
    icon: ListIcon,
    to: routes.catalog,
    i18n: 'catalog'
  },
  {
    icon: EyeIcon,
    to: '#',
    i18n: 'history'
  }
]

interface FavoriteAmountQuery {
  favoriteAmount: number
}

const SidebarNavList: React.FC<SidebarNavListProps> = ({ onClose }) => {
  const { t } = useTranslation()

  const { data } = useQuery<FavoriteAmountQuery>(GET_FAVORITE_AMOUNT)
  const favoriteAmount = data?.favoriteAmount

  const goTo = (path: string): void => {
    onClose()

    if (path === '/profile') {
      const isAuth = SharedMutations.checkAuthentication()
      if (!isAuth) return
    }

    setTimeout(() => {
      history.push(path)
    }, 250)
  }

  return (
    <NavList>
      {drawerItems.map((item) => (
        <ListItem key={item.to} onClick={(): void => goTo(item.to)}>
          {item.i18n === 'favorite' ? (
            <Badge content={favoriteAmount}>
              <ItemIcon>
                <item.icon />
              </ItemIcon>
            </Badge>
          ) : (
            <ItemIcon>
              <item.icon />
            </ItemIcon>
          )}
          <ItemText>
            <p>{t(`drawer.${item.i18n}`)}</p>
          </ItemText>
        </ListItem>
      ))}
    </NavList>
  )
}

export default SidebarNavList
