import React from 'react'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { routeNames } from '@/utils/navigation'
import Badge from '@/shared/Badge'
import Search from '@/components/Search'
import MenuIcon from '../../../public/assets/icons/menu.svg'
import HeartIcon from '../../../public/assets/icons/heart.svg'
import ProfileIcon from '../../../public/assets/icons/profile.svg'
import CartIcon from '../../../public/assets/icons/header_cart.svg'
import { useQuery } from '@apollo/client'

import { GET_HEADER_DATA } from '../../apollo/cache/queries/shared'
// import { SharedMutations } from '../../apollo/cache/mutations'

import {
  TheHeader,
  Wrapper,
  LogoLink,
  NavList,
  NavListLink,
  TheMenuIcon,
  TheHeartIcon,
  TheProfileIcon,
  TheCartIcon,
  HeaderButton,
  CartButton,
  DynamicButton
} from './Header.styled'

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
    <TheHeader>
      <Wrapper>
        <HeaderButton onClick={onDrawerOpen} disableRipple>
          <TheMenuIcon>
            <MenuIcon />
          </TheMenuIcon>
        </HeaderButton>
        <LogoLink href={routeNames.root}>
          <Image width={150} height={40} priority src="/assets/logo.svg" alt="логотип" />
        </LogoLink>
        <nav>
          <NavList>
            <li>
              <NavListLink href={routeNames.root}>{t('home')}</NavListLink>
            </li>
            <li>
              <NavListLink href={routeNames.catalog}>{t('catalog')}</NavListLink>
            </li>
          </NavList>
        </nav>
        {/*  */}
        <Search />
        {/*  */}
        <DynamicButton onClick={handleFavoritesClick} disableRipple>
          <Badge content={favoriteAmount}>
            <TheHeartIcon>
              <HeartIcon />
            </TheHeartIcon>
          </Badge>
        </DynamicButton>
        <DynamicButton onClick={handleProfileClick} disableRipple>
          <Badge content={0} max={5}>
            <TheProfileIcon>
              <ProfileIcon />
            </TheProfileIcon>
          </Badge>
        </DynamicButton>
        <CartButton onClick={handleCartClick} disableRipple>
          <Badge content={cartAmount}>
            <TheCartIcon>
              <CartIcon />
            </TheCartIcon>
          </Badge>
        </CartButton>
      </Wrapper>
    </TheHeader>
  )
}

export default Header
