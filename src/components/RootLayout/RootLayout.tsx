import React, { useState } from 'react'
import Header from '../Header/Header'
import Drawer from '../Drawer/Drawer'

const RootLayout: React.FC = ({ children }) => {
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
      <Header onDrawerOpen={handleOpenDrawer} />
      <main>{children}</main>
    </>
  )
}

export default RootLayout
