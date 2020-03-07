import React, { useState } from 'react'
import Header from '../Header/Header'
import Drawer from '../Drawer/Drawer'

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
      <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} />
      <Header onDrawerOpen={handleOpenDrawer} themeChanger={themeChanger} />
      <main>{children}</main>
    </>
  )
}

export default RootLayout
