import React, { useState, useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Sidebar from '../Sidebar/Sidebar'
import Cart from '../Cart/Cart'
import { CartMutations, FavoriteMutations } from '@/apollo/cache/mutations'

interface IRootLayout {
  children: React.ReactNode
  theme: 'light' | 'dark'
  onThemeChange(c: boolean): void
}

const RootLayout: React.FC<IRootLayout> = ({ children, theme, onThemeChange }) => {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false)
  const [isCartOpen, setCartOpen] = useState<boolean>(false)

  useEffect(() => {
    CartMutations.syncCart()
    FavoriteMutations.syncFavorite()
  }, [])

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
      <Sidebar
        isOpen={isDrawerOpen}
        theme={theme}
        onClose={handleCloseDrawer}
        themeChanger={onThemeChange}
      />
      <Cart isOpen={isCartOpen} onClose={handleCartClose} />
      <Header onCartOpen={handleCartOpen} onDrawerOpen={handleOpenDrawer} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default RootLayout
