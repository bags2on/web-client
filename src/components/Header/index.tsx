import { memo } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { routeNames } from '@/utils/navigation'
import { usePathname } from 'next/navigation'
import { useCartStore } from '@/store/cart'
import { useTranslation } from 'next-i18next'
import { useFavoriteStore } from '@/store/favorite'
import { Badge } from '@/shared/Badge'
import { IconButton } from '@/shared/IconButton'
import { Search } from '@/components/Search'
import MenuIcon from '../../../public/assets/icons/menu.svg'
import HeartIcon from '../../../public/assets/icons/heart.svg'
import ProfileIcon from '../../../public/assets/icons/profile.svg'
import CartIcon from '../../../public/assets/icons/header_cart.svg'

import styles from './styles.module.scss'

interface HeaderProps {
  onDrawerOpen(): void
  onCartOpen(): void
}

export const Header = memo(function Header({ onDrawerOpen, onCartOpen }: HeaderProps) {
  const pathname = usePathname()

  const cartAmount = useCartStore((state) => state.cartAmount())
  const favoriteAmount = useFavoriteStore((state) => state.amount())
  const { t } = useTranslation()

  const handleCartClick = (): void => {
    onCartOpen()
  }

  const handleFavoritesClick = (): void => {
    // history.push(routes.favorite)
  }

  const handleProfileClick = (): void => {
    console.log('profile click')
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
        <IconButton className={styles.dynamic} onClick={handleFavoritesClick} disableRipple>
          <Badge content={favoriteAmount}>
            <div className={clsx('svg-icon', styles['heart-icon'])}>
              <HeartIcon />
            </div>
          </Badge>
        </IconButton>
        <IconButton className={styles.dynamic} onClick={handleProfileClick} disableRipple>
          <Badge content={0} max={5}>
            <div className={clsx('svg-icon', styles['profile-icon'])}>
              <ProfileIcon />
            </div>
          </Badge>
        </IconButton>
        <IconButton className={styles['cart-button']} onClick={handleCartClick} disableRipple>
          <Badge content={cartAmount}>
            <div className={clsx('svg-icon', styles['cart-icon'])}>
              <CartIcon />
            </div>
          </Badge>
        </IconButton>
      </div>
    </header>
  )
})
