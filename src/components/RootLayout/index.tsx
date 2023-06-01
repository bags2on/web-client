import React, { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Sidebar from '../Sidebar/Sidebar'

interface IRootLayout {
  children: React.ReactNode
}

const RootLayout: React.FC<IRootLayout> = ({ children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false)

  const handleCloseDrawer = (): void => {
    setDrawerOpen(false)
  }

  const handleOpenDrawer = (): void => {
    setDrawerOpen(true)
  }

  return (
    <>
      <Sidebar
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        themeChanger={() => {
          console.log(1)
        }}
      />
      <Header
        onCartOpen={() => {
          console.log(1)
        }}
        onDrawerOpen={handleOpenDrawer}
      />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default RootLayout
