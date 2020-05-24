import React, { useState } from 'react'
import Header from '../Header/Header'
import Drawer from '../Drawer/Drawer'
import Footer from '../Footer/Footer'

interface RootLayoutProps {
  themeChanger(checked: boolean): void
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, themeChanger }) => {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false)

  const handleOpenDrawer = (): void => {
    setDrawerOpen(true)
  }

  const handleCloseDrawer = (): void => {
    setDrawerOpen(false)
  }

  return (
    <>
      <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} themeChanger={themeChanger} />
      <Header onDrawerOpen={handleOpenDrawer} themeChanger={themeChanger} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default RootLayout
