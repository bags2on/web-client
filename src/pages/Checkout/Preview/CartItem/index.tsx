import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import SvgIcon from '@material-ui/core/SvgIcon'
import ImagePlaceholder from '../../../../shared/ImagePlaceholder'
import AmountController from '../../../../shared/AmountController'
import routes from '../../../../utils/routes'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../../../utils/helpers'
import { generateLink } from '../../../../utils/links'
import { CartMutations } from '../../../../apollo/cache/mutations'
import { ReactComponent as TrashIcon } from '../../../../assets/svg/icons/trash-alt.svg'
import { makeStyles } from '@material-ui/core'

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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'relative',
    marginBottom: 35,
    '&::after': {
      content: "''",
      position: 'absolute',
      width: '60%',
      height: '2px',
      borderRadius: 'inherit',
      background: '#dcdcdc',
      bottom: '-27px',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  },
  box: {
    width: '100%',
    minWidth: '100px',
    maxWidth: '180px',
    position: 'relative',
    marginRight: 20
  },
  productInfoBox: {
    width: '100%',
    maxWidth: '900px',
    paddingTop: '5%'
  },
  title: {
    maxWidth: 200,
    margin: 0,
    fontSize: 19,
    fontWeight: 500,
    paddingBottom: 4,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    color: 'inherit',
    textDecoration: 'none',
    transition: 'color .2s',
    display: 'inline-block',
    '&:hover, &:focus': {
      color: 'orange',
      outline: 'none'
    }
  },
  priceTitle: {
    color: '#707070',
    fontSize: 16,
    fontWeight: 500
  },
  amountTitle: {
    margin: 0,
    paddingLeft: 1,
    fontSize: 16,
    fontWeight: 500
  },
  trashButton: {
    color: '#a7a7a7',
    fontSize: 12,
    borderRadius: 10,
    padding: '0px 17px',
    backgroundColor: theme.palette.type === 'light' ? '#ebebeb' : '#363636',
    '&:hover': {
      color: '#dc143c',
      backgroundColor: theme.palette.type === 'light' ? '#ebebeb' : '#363636'
    }
  },
  controllerWrapper: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-between'
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
    <div className={classes.root}>
      <div className={classes.box}>
        <Link to={generateLink(routes.product, id)}>
          <ImagePlaceholder plain src={preview} altText={title} />
        </Link>
      </div>
      <div className={classes.productInfoBox}>
        <Grid container>
          <Grid item xs={12}>
            <Link title={title} to={generateLink(routes.product, id)} className={classes.title}>
              {title}
            </Link>
          </Grid>
          <Grid item xs={12}>
            <span className={classes.priceTitle}>Цена:&nbsp;&nbsp;{formatPrice(currentPrice)}&nbsp;₴</span>
          </Grid>
          <Grid item xs={12}>
            <p className={classes.amountTitle}>
              {count}&nbsp;шт:&nbsp;&nbsp;{formatPrice(count * currentPrice)}&nbsp;грн.
            </p>
          </Grid>
        </Grid>
        <div className={classes.controllerWrapper}>
          <AmountController min={1} max={100} amount={count} onChange={handleAmountChange} />
          <IconButton
            disableRipple
            onClick={handleProductRemove}
            className={classes.trashButton}
            aria-label={`Удалить "${title}"`}
          >
            <SvgIcon component="span" fontSize="small">
              <TrashIcon />
            </SvgIcon>
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default CartItem
