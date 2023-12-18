import React from 'react'
import clsx from 'clsx'
import Badge from '@/shared/Badge'
import HomeIcon from '../../../../public/assets/icons/home.svg'
import UserIcon from '../../../../public/assets/icons/user.svg'
import HeartIcon from '../../../../public/assets/icons/heart_2.svg'
import ListIcon from '../../../../public/assets/icons/list.svg'
import EyeIcon from '../../../../public/assets/icons/eye.svg'
import { routeNames } from '@/utils/navigation'
import { useTranslation } from 'next-i18next'
import { useQuery } from '@apollo/client'
import { GET_FAVORITE_AMOUNT } from '@/apollo/cache/queries/favorite'
import { SharedMutations } from '@/apollo/cache/mutations'
import { useRouter } from 'next/router'

import styles from './Navigation.module.scss'

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

const Navigation: React.FC<SidebarNavListProps> = ({ onClose }) => {
  const router = useRouter()
  const { t } = useTranslation('common')

  const { data } = useQuery<FavoriteAmountQuery>(GET_FAVORITE_AMOUNT)
  const favoriteAmount = data?.favoriteAmount

  const goTo = (path: string): void => {
    onClose()

    if (path === '/profile') {
      const isAuth = SharedMutations.checkAuthentication()
      if (!isAuth) return
    }

    router.push(path)
  }

  return (
    <ul className={styles.navList}>
      {drawerItems.map((item) => (
        <li key={item.to} onClick={(): void => goTo(item.to)} className={styles.listItem}>
          {item.i18n === 'favorite' ? (
            <Badge content={favoriteAmount}>
              <div className={clsx('svg-icon', styles.icon)}>
                <item.icon />
              </div>
            </Badge>
          ) : (
            <div className={clsx('svg-icon', styles.icon)}>
              <item.icon />
            </div>
          )}
          <div className={styles.text}>
            <p>{t(`drawer.${item.i18n}`)}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Navigation
