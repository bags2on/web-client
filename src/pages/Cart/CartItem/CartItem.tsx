import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
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
      width: '47%',
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
    marginRight: 30
  },
  linkWrapper: {},
  productInfoBox: {
    width: '100%',
    maxWidth: '900px',
    paddingTop: '10%'
    // paddingTop: 20 // 35
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
    whiteSpace: 'nowrap',
    paddingBottom: 5,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '& > a': {
      color: 'inherit',
      textDecoration: 'none',
      transition: 'color .2s',
      '&:hover, &:focus': {
        color: 'orange',
        outline: 'none'
      }
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

  const { id, title, preview } = item

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
            <Typography component="p" className={classes.title}>
              <Link to={generateLink(routes.product, id)}>{title}</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <Typography component="span">{item.price}&nbsp;₴</Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <Typography component="span">{item.amount}&nbsp;шт.</Typography>
          </Grid>
        </Grid>
        <div>
          <AmountController min={1} value={count} startValue={item.amount} onChange={handleCountChange} />
        </div>
      </div>
    </Box>
  )
}

export default CartItem
