import React from 'react'
import history from '../../utils/history'
import routes from '../../utils/routes'
import Badge from '../../shared/Badge'
import Search from '../../components/Search/Search'
import logoImage from '../../assets/svg/logo.svg'
import { ReactComponent as MenuIcon } from '../../assets/svg/icons/menu.svg'
import { ReactComponent as HeartIcon } from '../../assets/svg/icons/heart.svg'
import { ReactComponent as ProfileIcon } from '../../assets/svg/icons/avatar.svg'
import { ReactComponent as CartIcon } from '../../assets/svg/icons/header_cart.svg'
import { useQuery } from '@apollo/client'
import { GET_HEADER_DATA } from '../../apollo/cache/queries/shared'
import { SharedMutations } from '../../apollo/cache/mutations'
import { useTranslation } from 'react-i18next'

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
    history.push(routes.favorite)
  }

  const handleProfileClick = (): void => {
    const isAuth = SharedMutations.checkAuthentication()
    if (isAuth) {
      history.push(routes.profileInfo)
    }
  }

  return (
    <TheHeader>
      <Wrapper>
        <HeaderButton onClick={onDrawerOpen} disableRipple>
          <TheMenuIcon>
            <MenuIcon />
          </TheMenuIcon>
        </HeaderButton>
        <LogoLink to="/">
          <img src={logoImage} alt="логотип" />
        </LogoLink>
        <nav>
          <NavList>
            <li>
              <NavListLink to={routes.root}>{t('header.home')}</NavListLink>
            </li>
            <li>
              <NavListLink to={routes.catalog}>Каталог</NavListLink>
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
