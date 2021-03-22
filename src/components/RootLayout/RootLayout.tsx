import React, { useState } from 'react'
import { useLang } from '../../hooks'
import Header from '../Header/Header'
import Drawer from '../Drawer/Drawer'
import Cart from '../Cart/Cart'
import Footer from '../Footer/Footer'
// import { useMutation } from '@apollo/react-hooks'
// import { ADD_PRODUCT_TO_CART } from '../../apollo/cache/queries/cart'

import { makeStyles } from '@material-ui/core'

interface RootLayoutProps {
  themeChanger(checked: boolean): void
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 65,
    [theme.breakpoints.up('lg')]: {
      marginTop: 15
    }
  }
}))

const RootLayout: React.FC<RootLayoutProps> = ({ children, themeChanger }) => {
  useLang()
  const classes = useStyles()
  // const [addToCart] = useMutation(ADD_PRODUCT_TO_CART)

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     addToCart({
  //       variables: {
  //         id: 'jSqOXRb'
  //       }
  //     })
  //     addToCart({
  //       variables: {
  //         id: 'JBtPsDu'
  //       }
  //     })
  //     addToCart({
  //       variables: {
  //         id: 'PV5zoo1'
  //       }
  //     })
  //   }, 3000)
  // }, [])

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
    </>
  )
}

export default RootLayout
