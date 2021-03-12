import React from 'react'
import Button from '../../../../shared/Button'
import { useMutation } from '@apollo/react-hooks'
import { makeStyles } from '@material-ui/core'
import { ADD_PRODUCT_TO_CART } from '../../../../apollo/cache/queries/cart'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '20px 5px'
  },
  buyBox: {
    width: '100%',
    maxWidth: 135,
    marginRight: 10
  },
  cartBox: {},
  buyButton: {
    background: '#2ecc40',
    fontWeight: 600,
    color: '#fff',
    marginRight: 10,
    '&:hover': {
      background: '#30e244'
    }
  },
  cartButton: {
    background: '#ff9900',
    fontWeight: 600,
    color: '#fff',
    '&:hover': {
      opacity: 0.9,
      background: '#ff9900'
    }
  }
}))

interface ProductBuyProps {
  id: string
}

const ProductBuy: React.FC<ProductBuyProps> = ({ id }) => {
  const classes = useStyles()

  const [addToCart] = useMutation(ADD_PRODUCT_TO_CART, { variables: { id } })

  const handleAddToCart = (): void => {
    addToCart()
  }

  return (
    <div className={classes.root}>
      <div className={classes.buyBox}>
        <Button className={classes.buyButton} fullWidth>
          Купить
        </Button>
      </div>
      <div>
        <Button onClick={handleAddToCart} className={classes.cartButton} fullWidth>
          Добавить в корзину
        </Button>
      </div>
    </div>
  )
}

export default ProductBuy
