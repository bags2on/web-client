import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'next-i18next'
import { routeNames } from '@/utils/navigation'
import Badge from '@/shared/Badge'
import IconButton from '@/shared/IconButton'
import Search from '@/components/Search'
import MenuIcon from '../../../public/assets/icons/menu.svg'
import HeartIcon from '../../../public/assets/icons/heart.svg'
import ProfileIcon from '../../../public/assets/icons/profile.svg'
import CartIcon from '../../../public/assets/icons/header_cart.svg'
import { useQuery } from '@apollo/client'

import { GET_HEADER_DATA } from '../../apollo/cache/queries/shared'
// import { SharedMutations } from '../../apollo/cache/mutations'

import styles from './Header.module.scss'

interface HeaderQuery {
  cartAmount: number
  favoriteAmount: number
}

interface HeaderProps {
  onDrawerOpen(): void
  onCartOpen(): void
}

const Header: React.FC<HeaderProps> = ({ onDrawerOpen, onCartOpen }) => {
  const { data } = useQuery<HeaderQuery>(GET_HEADER_DATA)
  const { t } = useTranslation()

  const pathname = usePathname()

  const cartAmount = data?.cartAmount
  const favoriteAmount = data?.favoriteAmount

  const handleCartClick = (): void => {
    onCartOpen()
  }

  const handleFavoritesClick = (): void => {
    // history.push(routes.favorite)
  }

  const handleProfileClick = (): void => {
    // const isAuth = SharedMutations.checkAuthentication()
    // if (isAuth) {
    // history.push(routes.profileInfo)
    // }
  }

  return (
    <header className={styles.header}>
      <div
        className={clsx(
          styles.wrapper,
          pathname === routeNames.catalog && styles['wrapper-expand']
        )}
      >
        <IconButton disableRipple onClick={onDrawerOpen}>
          <div className={clsx('svg-icon', styles['menu-icon'])}>
            <MenuIcon />
          </div>
        </IconButton>
        <Link href={routeNames.root} className={styles.logo}>
          <Image width={150} height={40} src="/assets/logo.svg" alt="логотип" priority={true} />
        </Link>
        <nav>
          <ul className={styles.navlist}>
            <li>
              <Link href={routeNames.root} className={styles['nav-link']}>
                {t('home')}
              </Link>
            </li>
            <li>
              <Link href={routeNames.catalog} className={styles['nav-link']}>
                {t('catalog')}
              </Link>
            </li>
          </ul>
        </nav>
        {/*  */}
        <Search />
        {/*  */}
        <IconButton _сlassName={styles.dynamic} onClick={handleFavoritesClick} disableRipple>
          <Badge content={favoriteAmount}>
            <div className={clsx('svg-icon', styles['heart-icon'])}>
              <HeartIcon />
            </div>
          </Badge>
        </IconButton>
        <IconButton _сlassName={styles.dynamic} onClick={handleProfileClick} disableRipple>
          <Badge content={0} max={5}>
            <div className={clsx('svg-icon', styles['profile-icon'])}>
              <ProfileIcon />
            </div>
          </Badge>
        </IconButton>
        <IconButton _сlassName={styles['cart-button']} onClick={handleCartClick} disableRipple>
          <Badge content={cartAmount}>
            <div className={clsx('svg-icon', styles['cart-icon'])}>
              <CartIcon />
            </div>
          </Badge>
        </IconButton>
      </div>
    </header>
  )
}

export default React.memo(Header)
