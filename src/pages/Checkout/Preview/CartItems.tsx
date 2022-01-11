import React from 'react'
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import SvgIcon from '@material-ui/core/SvgIcon'
import history from '../../../utils/history'
import routes from '../../../utils/routes'
import CartItem, { CartItemType } from './CartItem'
import { CartMutations } from '../../../apollo/cache/mutations'
import { ReactComponent as TrashIcon } from '../../../assets/svg/icons/trash-alt.svg'
import { makeStyles } from '@material-ui/core'

interface CartItemsProps {
  cartItems: CartItemType[]
  onClose(): void
}

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative'
  },
  list: {
    margin: 0,
    padding: '15px 10px 0 10px',
    listStyle: 'none',
    maxHeight: 500,
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: 6
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: 10,
      backgroundColor: '#e6e6e6'
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 10,
      backgroundColor: 'rgba(0,0,0,0.2)'
    }
  },
  clearButton: {
    color: '#dc143c',
    fontSize: 5,
    borderRadius: 10,
    width: 50,
    height: 50,
    '& svg': {
      fontSize: 20
    },
    '&:hover': {
      color: '#dc143c',
      backgroundColor: 'transparent'
    }
  }
}))

const CartItems: React.FC<CartItemsProps> = ({ cartItems }) => {
  const classes = useStyles()

  const handleClearAllClick = (): void => {
    CartMutations.clearCart()
    history.replace(routes.root)
  }

  const handleProductRemove = (id: string): void => {
    CartMutations.removeProduct(id)
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justify="space-between" alignItems="center">
          <h2>Ваш заказ</h2>
          <IconButton onClick={handleClearAllClick} className={classes.clearButton} aria-label={`Удалить товар`}>
            <Tooltip title="Удалить все">
              <SvgIcon>
                <TrashIcon />
              </SvgIcon>
            </Tooltip>
          </IconButton>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container component="ul" className={classes.list}>
          {cartItems.map((product: CartItemType, index) => (
            <Grid key={index} component="li" item xs={12}>
              <CartItem product={product} onRemove={handleProductRemove} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default React.memo(CartItems)
