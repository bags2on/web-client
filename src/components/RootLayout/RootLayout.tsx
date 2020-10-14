import React, { useState } from 'react'
import Header from '../Header/Header'
import Drawer from '../Drawer/Drawer'
import Cart from '../Cart/Cart'
import Footer from '../Footer/Footer'

interface RootLayoutProps {
  themeChanger(checked: boolean): void
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, themeChanger }) => {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false)
  const [isCartOpen, setCartOpen] = useState<boolean>(true)

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
      <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} themeChanger={themeChanger} />
      <Cart isOpen={isCartOpen} onClose={handleCartClose} themeChanger={themeChanger} />
      <Header onDrawerOpen={handleOpenDrawer} onCartOpen={handleCartOpen} themeChanger={themeChanger} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default RootLayout
