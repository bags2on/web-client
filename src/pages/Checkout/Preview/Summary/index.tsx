import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '../../../../shared/Button/Button'
import { useQuery } from '@apollo/client'
import { GET_CART_PRICE } from '../../../../apollo/cache/queries/cart'
import { formatPrice } from '../../../../utils/helpers'
import { makeStyles } from '@material-ui/core'

interface SummaryProps {
  submitLoading: boolean
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '15px 10px 0 15px',
    marginTop: 10
  },
  info: {
    marginBottom: 15
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
  totalTitle: {
    fontSize: 22,
    fontWeight: 500,
    '& > b': {
      fontSize: 18,
      marginRight: 50
    }
  },
  conditions: {
    padding: '0 20px',
    '& > p': {
      textAlign: 'center',
      fontSize: 13,
      color: theme.palette.type === 'light' ? '#6c757d' : '#f1f1f1',
      paddingLeft: 3
    }
  }
}))

const Summary: React.FC<SummaryProps> = ({ submitLoading }) => {
  const classes = useStyles()
  const { data } = useQuery(GET_CART_PRICE)

  return (
    <div className={classes.root}>
      <Grid container>
        <div className={classes.info}>
          <div className={classes.totalTitle}>
            <b>Итого:</b>
            <span>{formatPrice(data.cartPrice)}&nbsp;грн.</span>
          </div>
        </div>
        <Grid container>
          <Button fullWidth disableShadow color="secondary" type="submit" loading={submitLoading} darkLoader>
            Подтвердить заказ
          </Button>
        </Grid>
        <div className={classes.conditions}>
          <p>Подтверждая заказ, я принимаю условия пользовательского соглашения</p>
        </div>
      </Grid>
    </div>
  )
}

export default Summary
