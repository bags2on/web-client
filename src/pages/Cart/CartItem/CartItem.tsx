import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import ImagePlaceholder, { ImagePlaceholderProps } from '../../../shared/ImagePlaceholder/ImagePlaceholder'
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
  root: {},
  box: {
    width: '100%',
    maxWidth: '180px',
    position: 'relative',
    marginRight: 15
  },
  linkWrapper: {},
  title: {
    fontSize: 18,
    fontWeight: 500,
    whiteSpace: 'nowrap',
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
  const { id, title, preview } = item

  return (
    <Box display="flex">
      <Box component="div" className={classes.box}>
        <Link className={classes.linkWrapper} to={generateLink(routes.product, id)}>
          <ImagePlaceholder previewImage={preview} altText={title} />
        </Link>
      </Box>
      <Box paddingTop="10px">
        <Typography component="p" className={classes.title}>
          <Link to={generateLink(routes.product, id)}>{title}</Link>
        </Typography>
        <p>price: {item.price}</p>
        <p>x{item.amount}</p>
      </Box>
    </Box>
  )
}

export default CartItem
