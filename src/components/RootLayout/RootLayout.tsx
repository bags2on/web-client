import React, { useState, useEffect } from 'react'
import { useLang, useWindowRatio } from '../../hooks'
import Header from '../Header/Header'
import SideBar from '../Sidebar/Sidebar'
import Cart from '../Cart/Cart'
import Footer from '../Footer/Footer'
import AuthModal from '../AuthModal/AuthModal'
import { CartMutations, FavoriteMutations } from '../../apollo/cache/mutations'
import styled from 'styled-components'

interface RootLayoutProps {
  themeChanger(checked: boolean): void
  children?: React.ReactNode
}

const Main = styled.main`
  margin-top: 60px;
  @media ${({ theme }) => theme.media.lg} {
    margin-top: 0;
  }
`

const RootLayout: React.FC<RootLayoutProps> = ({ children, themeChanger }) => {
  useLang()
  useWindowRatio()

  useEffect(() => {
    CartMutations.syncCart()
    FavoriteMutations.syncFavorite()
  }, [])

  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false)
  const [isCartOpen, setCartOpen] = useState<boolean>(false)

  const handleOpenDrawer = (): void => {
    setDrawerOpen(true)
  }

  const handleCloseDrawer = (): void => {
    setDrawerOpen(false)
  }

  const handleCartOpen = (): void => {
    setCartOpen(true)
  }

  const handleCartClose = (): void => {
    setCartOpen(false)
  }

  return (
    <>
      <SideBar isOpen={isDrawerOpen} onClose={handleCloseDrawer} themeChanger={themeChanger} />
      <Cart isOpen={isCartOpen} onClose={handleCartClose} />
      <Header onDrawerOpen={handleOpenDrawer} onCartOpen={handleCartOpen} />
      <Main>{children}</Main>
      <Footer />
      <AuthModal />
    </>
  )
}

export default RootLayout
