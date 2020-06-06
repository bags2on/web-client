import React from 'react'
import Button from '../../../shared/Button'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    padding: '20px 5px'
  }
}))

interface ProductBuyProps {
  id: string
}

const ProductBuy: React.FC<ProductBuyProps> = ({}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Button color="secondary" fullWidth>
        Buy
      </Button>
    </div>
  )
}

export default ProductBuy
