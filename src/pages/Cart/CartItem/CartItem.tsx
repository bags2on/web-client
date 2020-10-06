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
import { generateLink } from '../../../utils/links'
import { makeStyles } from '@material-ui/core'

export type CartItemType = {
  id: string
  title: string
  price: number
  amount: number
  preview: string
}

interface CartItemProps {
  item: CartItemType
}

const useStyles = makeStyles(() => ({
  root: {
    // background: 'orange',
    position: 'relative',
    marginBottom: 20,
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
    paddingRight: 16,
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
    '&:active': {
      textDecoration: 'underline'
    },
    '&:focus': {
      outline: 'auto'
    }
  }
}))

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const classes = useStyles()

  const [count, setCount] = useState<number>(item.amount)

  console.log(count)

  const handleCountChange = (n: number): void => {
    setCount(n)
  }

  const { id, title, preview, price, amount } = item

  return (
    <Box display="flex" className={classes.root}>
      <Box component="div" className={classes.box}>
        <Link className={classes.linkWrapper} to={generateLink(routes.product, id)}>
          <ImagePlaceholder previewImage={preview} altText={title} />
        </Link>
      </Box>
      <div className={classes.productInfoBox}>
        <Grid container>
          <Grid item xs={12} sm={6} md={8}>
            <Box minWidth="0">
              <Typography component="p" className={classes.title}>
                <Link title={title} to={generateLink(routes.product, id)}>
                  {title}
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <Typography component="span" className={classes.priceTitle}>
              Цена:&nbsp;&nbsp;{price}&nbsp;₴
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <Typography component="p" className={classes.amountTitle}>
              {count}&nbsp;шт:&nbsp;&nbsp;{count * price}&nbsp;грн.
            </Typography>
            <Box marginTop="10px">
              <Button
                className={classes.removeButton}
                disableRipple
                startIcon={<CloseIcon fontSize="small" />}
                aria-label={`Удалить этот (${title}) товар`}
              >
                удалить
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box marginTop="20px" display="flex" justifyContent="flex-end" paddingRight="10px">
          <AmountController min={1} max={100} value={count} startValue={amount} onChange={handleCountChange} />
        </Box>
      </div>
    </Box>
  )
}

export default CartItem