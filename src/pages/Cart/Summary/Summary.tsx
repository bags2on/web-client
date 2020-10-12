import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { makeStyles } from '@material-ui/core'
import { formatPrice } from '../../../utils/helpers'

interface SummaryProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '15px 10px',
    backgroundColor: theme.palette.type === 'light' ? '#f3f3f3' : '#282828'
  },
  clearCartButton: {
    textTransform: 'none'
  },
  checkoutButton: {
    width: '100%',
    fontWeight: 500,
    fontSize: 18,
    color: '#fff',
    padding: '10px 0',
    marginTop: 10,
    backgroundColor: theme.palette.secondary.main
  },
  totalTitle: {
    fontWeight: 500
  }
}))

const CLEAR_CART = gql`
  mutation ClearCart {
    clearCart @client
  }
`

const GET_CART_TOTAL_SUMM = gql`
  {
    cartTotalPrice @client
  }
`

const Summary: React.FC<SummaryProps> = () => {
  const classes = useStyles()

  const [onClearCart] = useMutation(CLEAR_CART)
  const { data } = useQuery(GET_CART_TOTAL_SUMM)

  const handleClearAllClick = (): void => {
    onClearCart()
  }

  const handleCheckoutClick = (): void => {
    console.log('order')
  }

  return (
    <section className={classes.root}>
      <Grid container>
        <Grid container>
          <Button onClick={handleClearAllClick}>очистить корзину</Button>
          <Box flexBasis="50%" display="flex" alignItems="center" justifyContent="center">
            <Typography component="p">
              Итого:&nbsp;
              <Typography component="span" className={classes.totalTitle}>
                {formatPrice(data.cartTotalPrice)}&nbsp;грн.
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid container>
          <Button className={classes.checkoutButton} onClick={handleCheckoutClick}>
            Оформить заказ
          </Button>
        </Grid>
      </Grid>
    </section>
  )
}

export default Summary
