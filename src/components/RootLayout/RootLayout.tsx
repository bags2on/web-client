import React, { useState, useEffect } from 'react'
import { useLang, useWindowHeight } from '../../hooks'
import Header from '../Header/Header'
import Drawer from '../Drawer/Drawer'
import Cart from '../Cart/Cart'
import Footer from '../Footer/Footer'
import AuthModal from '../AuthModal/AuthModal'
import { CartMutations, FavoriteMutations } from '../../apollo/cache/mutations'
import { makeStyles } from '@material-ui/core'

interface RootLayoutProps {
  themeChanger(checked: boolean): void
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 65,
    [theme.breakpoints.up('lg')]: {
      marginTop: 0
    }
  }
}))

const RootLayout: React.FC<RootLayoutProps> = ({ children, themeChanger }) => {
  useLang()
  useWindowHeight()

  const classes = useStyles()

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
      <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} themeChanger={themeChanger} />
      <Cart isOpen={isCartOpen} onClose={handleCartClose} />
      <Header onDrawerOpen={handleOpenDrawer} onCartOpen={handleCartOpen} />
      <main className={classes.root}>{children}</main>
      <Footer themeChanger={themeChanger} />
      <AuthModal />
    </>
  )
}

export default RootLayout
