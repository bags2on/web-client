import React, { useState, useEffect, useCallback } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Sidebar from '../Sidebar/Sidebar'
import Cart from '../Cart/Cart'
import { FavoriteMutations } from '@/apollo/cache/mutations'
import { useCartStore } from '@/store/cart'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false)
  const [isCartOpen, setCartOpen] = useState<boolean>(false)

  useEffect(() => {
    FavoriteMutations.syncFavorite()
    useCartStore.persist.rehydrate()
  }, [])

  const handleOpenDrawer = useCallback(() => {
    setDrawerOpen(true)
  }, [])

  const handleCloseDrawer = useCallback(() => {
    setDrawerOpen(false)
  }, [])

  const handleCartOpen = useCallback(() => {
    setCartOpen(true)
  }, [])

  const handleCartClose = useCallback(() => {
    setCartOpen(false)
  }, [])

  return (
    <>
      <Sidebar isOpen={isDrawerOpen} onClose={handleCloseDrawer} />
      <Cart isOpen={isCartOpen} onClose={handleCartClose} />
      <Header onCartOpen={handleCartOpen} onDrawerOpen={handleOpenDrawer} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default RootLayout
