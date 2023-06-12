import React, { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Sidebar from '../Sidebar/Sidebar'

interface IRootLayout {
  children: React.ReactNode
  theme: 'light' | 'dark'
  onThemeChange(c: boolean): void
}

const RootLayout: React.FC<IRootLayout> = ({ children, theme, onThemeChange }) => {
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
        theme={theme}
        onClose={handleCloseDrawer}
        themeChanger={onThemeChange}
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
