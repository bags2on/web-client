import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AppButton from '../../../shared/Button'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import CartItem, { CartItemType } from '../CartItem/CartItem'
import Summary from '../Summary/Summary'
import { ReactComponent as EmptyCartIcon } from '../../../assets/svg/emptycart.svg'
import { TransitionMotion, spring, presets } from 'react-motion'
import { makeStyles } from '@material-ui/core'
import { CartMutations } from '../../../apollo/cache/mutations'

interface CartItemsProps {
  data: CartItemType[]
  isEmpty: boolean
  onClose(): void
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative'
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    paddingTop: '20px'
  },
  clearCartButton: {
    display: 'block',
    fontSize: 16,
    padding: 10,
    fontWeight: 400,
    textTransform: 'none',
    marginLeft: 'auto',
    [theme.breakpoints.up('md')]: {
      '&:hover': {
        backgroundColor: 'transparent',
        textDecoration: 'underline'
      }
    }
  },
  emptyContainer: {
    height: 'calc(100vh - 142px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  imageBox: {
    padding: '0 15px',
    '& > svg': {
      width: '100%',
      height: 'auto',
      fill: 'gray'
    },
    '& > p': {
      fontSize: 20,
      fontWeight: 500,
      textAlign: 'center'
    }
  }
}))

const CartItems: React.FC<CartItemsProps> = ({ data, isEmpty, onClose }) => {
  const classes = useStyles()
  const [products, setProducts] = useState(data)

  const handleClearAllClick = (): void => {
    setProducts([])
    CartMutations.clearCart()
  }

  const handleProductRemove = (id: string): void => {
    const updated = products.filter((product) => product.id !== id)
    setProducts(updated)
    CartMutations.removeProduct(id)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onWillLeave = (): any => ({
    height: spring(0),
    opacity: spring(0)
  })

  // if (isLoading) {
  //   return <p>Loading</p> // TODO: better UI
  // }

  // if (error) {
  //   return <p>Error</p> // TODO: better UI
  // }

  return (
    <Box>
      {isEmpty ? (
        <Box className={classes.emptyContainer}>
          <div className={classes.imageBox}>
            <EmptyCartIcon />
            <Typography component="p">Корзина пуста</Typography>
          </div>
          <Box margin="0 auto" width="130px" marginTop="50px">
            <AppButton fullWidth onClick={onClose} color="secondary" startIcon={<ArrowBackIosIcon />}>
              Назад
            </AppButton>
          </Box>
        </Box>
      ) : (
        <Grid container>
          <Grid item xs={12}>
            <Summary onClose={onClose} />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={handleClearAllClick} className={classes.clearCartButton}>
              Очистить корзину
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TransitionMotion
              defaultStyles={products.map((product: CartItemType) => ({
                key: product.id,
                style: {
                  height: 260,
                  opacity: 1
                }
              }))}
              styles={products.map((product: CartItemType) => ({
                data: product,
                key: product.id,
                style: {
                  height: spring(260, presets.gentle),
                  opacity: spring(1, presets.gentle)
                }
              }))}
              willLeave={onWillLeave}
            >
              {(interpolatedStyles): React.ReactElement => (
                <Grid container component="ul" className={classes.list}>
                  {interpolatedStyles.map(({ key, style, data }) => (
                    <Grid key={key} style={style} component="li" item xs={12}>
                      <CartItem product={data} onRemove={handleProductRemove} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </TransitionMotion>
          </Grid>
        </Grid>
      )}
    </Box>
  )
}

export default React.memo(CartItems)
