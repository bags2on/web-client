import React from 'react'
import Badge from '../../../shared/Badge'
import HomeIcon from '../../../../public/assets/home.svg'
import UserIcon from '../../../../public/assets/user.svg'
import HeartIcon from '../../../../public/assets/heart_2.svg'
import ListIcon from '../../../../public/assets/list.svg'
import EyeIcon from '../../../../public/assets/eye.svg'
import { routeNames } from '@/utils/navigation'
import { useTranslation } from 'next-i18next'
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
    to: routeNames.root,
    i18n: 'home'
  },
  // {
  //   icon: SaleIcon,
  //   to: '/discounts',
  //   i18n: 'sales'
  // },
  {
    icon: UserIcon,
    to: routeNames.profile,
    i18n: 'profile'
  },
  {
    icon: HeartIcon,
    to: '/favorite', // TODO: add route
    i18n: 'favorite'
  },

  {
    icon: ListIcon,
    to: routeNames.catalog,
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
  const { t } = useTranslation('common')

  const { data } = useQuery<FavoriteAmountQuery>(GET_FAVORITE_AMOUNT)
  const favoriteAmount = data?.favoriteAmount

  const goTo = (path: string): void => {
    onClose()

    if (path === '/profile') {
      const isAuth = SharedMutations.checkAuthentication()
      if (!isAuth) return
    }

    // setTimeout(() => {
    //   history.push(path)
    // }, 250)
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
