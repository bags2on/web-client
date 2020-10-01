import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import CartItems from './CartItems/CartItems'
import ItemsHeader from './ItemsHeader/ItemsHeader'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {}
}))

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <CartItems />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Box>
  )
}

export default Cart
