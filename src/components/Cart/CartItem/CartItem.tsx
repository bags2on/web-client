import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close'
import { Link } from 'react-router-dom'
import ImagePlaceholder from '../../../shared/ImagePlaceholder'
import AmountController from '../../../shared/AmountController'
import routes from '../../../utils/routes'
import { formatPrice } from '../../../utils/helpers'
import { generateLink } from '../../../utils/links'
import { makeStyles } from '@material-ui/core'
import { CartMutations } from '../../../apollo/cache/mutations'

export type CartItemType = {
  id: string
  title: string
  currentPrice: number
  amount: number
  preview: string
}

interface CartItemProps {
  product: CartItemType
  onRemove: (id: string) => void
}

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    marginBottom: 30,
    '&::after': {
      content: "''",
      position: 'absolute',
      width: '55%',
      height: '2px',
      borderRadius: 'inherit',
      background: '#dcdcdc',
      bottom: '-12px',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  },
  box: {
    width: '100%',
    minWidth: '100px',
    maxWidth: '180px',
    position: 'relative',
    // marginRight: 15
    marginRight: 25
  },
  linkWrapper: {},
  productInfoBox: {
    width: '100%',
    maxWidth: '900px',
    paddingTop: '7%'
    // paddingTop: 20 // 35
  },
  title: {
    maxWidth: 200,
    fontSize: 22,
    fontWeight: 500,
    paddingBottom: 3,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    '& > a': {
      color: 'inherit',
      textDecoration: 'none',
      transition: 'color .2s',
      '&:hover, &:focus': {
        color: 'orange',
        outline: 'none'
      }
    }
  },
  priceTitle: {
    color: '#707070',
    fontSize: 16,
    fontWeight: 500
  },
  amountTitle: {
    paddingLeft: 1,
    fontSize: 16,
    fontWeight: 500
  },
  removeButton: {
    padding: 0,
    color: '#DC143C',
    fontSize: 12,
    '& .MuiButton-startIcon': {
      margin: 0
    },
    '&:hover': {
      background: 'none',
      textDecoration: 'underline'
    }
  }
}))

const CartItem: React.FC<CartItemProps> = ({ product, onRemove }) => {
  const { id, title, preview, currentPrice, amount } = product

  const classes = useStyles()
  const [count, setCount] = useState<number>(amount)

  const handleAmountChange = (_: string, n: number): void => {
    CartMutations.updateProductAmount(id, n)
    setCount(n)
  }

  const handleProductRemove = (): void => {
    onRemove(id)
  }

  return (
    <Box display="flex" className={classes.root}>
      <Box component="div" className={classes.box}>
        <Link className={classes.linkWrapper} to={generateLink(routes.product, id)}>
          <ImagePlaceholder src={preview} altText={title} />
        </Link>
      </Box>
      <div className={classes.productInfoBox}>
        <Grid container>
          <Grid item xs={12}>
            <Box minWidth="0">
              <Typography component="p" className={classes.title}>
                <Link title={title} to={generateLink(routes.product, id)}>
                  {title}
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography component="span" className={classes.priceTitle}>
              Цена:&nbsp;&nbsp;{formatPrice(currentPrice)}&nbsp;₴
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component="p" className={classes.amountTitle}>
              {count}&nbsp;шт:&nbsp;&nbsp;{formatPrice(count * currentPrice)}&nbsp;грн.
            </Typography>
            <Box marginTop="10px">
              <Button
                disableRipple
                onClick={handleProductRemove}
                className={classes.removeButton}
                startIcon={<CloseIcon fontSize="small" />}
                aria-label={`Удалить этот (${title}) товар`}
              >
                удалить
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box marginTop="20px" display="flex" justifyContent="flex-end" paddingRight="10px">
          <AmountController min={1} max={100} amount={count} onChange={handleAmountChange} />
        </Box>
      </div>
    </Box>
  )
}

export default CartItem
