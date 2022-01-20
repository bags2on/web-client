import React from 'react'
import clsx from 'clsx'
import Grid from '@material-ui/core/Grid'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import ContentLoader from 'react-content-loader'
import Button from '../../../shared/Button/Button'
import { useReactiveVar } from '@apollo/client'
import { cartPriceVar } from '../../../apollo/cache/variables'
import { formatPrice } from '../../../utils/helpers'
import { makeStyles } from '@material-ui/core'

interface SummaryProps {
  isLoading: boolean
  onClose(): void
  onCheckout(): void
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '15px 10px 25px 15px',
    backgroundColor: theme.palette.type === 'light' ? '#f3f3f3' : '#282828'
  },
  topContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%', // ?
    alignItems: 'center',
    marginBottom: 10
  },
  closeCartButton: {
    marginRight: 30
  },
  checkoutButton: {
    overflow: 'hidden',
    position: 'relative',
    display: 'block',
    width: '100%',
    fontWeight: 500,
    fontSize: 18,
    color: '#fff',
    padding: '10px 0',
    marginTop: 10,
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: '#ffa51e'
    }
  },
  skeletonCheckoutBtn: {
    position: 'absolute',
    top: 13
  },
  totalTitle: {
    margin: 0,
    fontSize: 18,
    '& > span': {
      fontSize: 16,
      fontWeight: 500
    }
  }
}))

const Summary: React.FC<SummaryProps> = ({ isLoading, onClose, onCheckout }) => {
  const classes = useStyles()

  const cartPrice = useReactiveVar(cartPriceVar)

  const handleCheckoutClick = (): void => {
    console.log('order')
    onCheckout()
  }

  if (isLoading) {
    return (
      <div className={classes.root}>
        <IconButton onClick={onClose} className={clsx(classes.closeCartButton, classes.skeletonCheckoutBtn)}>
          <CloseIcon />
        </IconButton>
        <ContentLoader
          backgroundColor="#F2E30C"
          foregroundColor="#ffd9a3"
          width="100%"
          height="102"
          viewBox="0 0 375 102"
        >
          <rect x="80" y="12" rx="4" ry="4" width="142" height="22" />
          <rect x="0" y="57" rx="8" ry="8" width="100%" height="44" />
        </ContentLoader>
      </div>
    )
  }

  return (
    <section className={classes.root}>
      <Grid container>
        <div className={classes.topContainer}>
          <IconButton onClick={onClose} className={classes.closeCartButton}>
            <CloseIcon />
          </IconButton>
          <p className={classes.totalTitle}>
            Итого:&nbsp;
            <span>{formatPrice(cartPrice)}&nbsp;грн.</span>
          </p>
        </div>
        <Grid container>
          <Button fullWidth disableShadow color="secondary" onClick={handleCheckoutClick}>
            Оформить заказ
          </Button>
        </Grid>
      </Grid>
    </section>
  )
}

export default Summary
