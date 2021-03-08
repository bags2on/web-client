import React, { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../Header/Header'
import Drawer from '../Drawer/Drawer'
import Cart from '../Cart/Cart'
import Footer from '../Footer/Footer'

interface RootLayoutProps {
  themeChanger(checked: boolean): void
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, themeChanger }) => {
  const { i18n } = useTranslation()

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

  const langHandler = (lang: string): void => {
    i18n.changeLanguage(lang)
  }

  // TODO: create your own HOOK
  const cbLangHandler = useCallback((): void => {
    langHandler('ru')
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (!i18n.language) {
      cbLangHandler()
      return
    }
  }, [i18n.language, cbLangHandler])

  return (
    <>
      <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} themeChanger={themeChanger} />
      <Cart isOpen={isCartOpen} onClose={handleCartClose} />
      <Header onDrawerOpen={handleOpenDrawer} onCartOpen={handleCartOpen} />
      <main>{children}</main>
      <Footer themeChanger={themeChanger} />
    </>
  )
}

export default RootLayout
