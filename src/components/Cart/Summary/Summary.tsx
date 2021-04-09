import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import AppButton from '../../../shared/Button'
import Typography from '@material-ui/core/Typography'
import { useQuery } from '@apollo/client'
import { makeStyles } from '@material-ui/core'
import { formatPrice } from '../../../utils/helpers'
import { GET_CART_TOTAL_SUMM } from '../../../apollo/cache/queries/cart'

interface SummaryProps {
  onClose(): void
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '15px 10px 25px 15px',
    backgroundColor: theme.palette.type === 'light' ? '#f3f3f3' : '#282828'
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
  totalTitle: {
    fontSize: 18,
    '& > span': {
      fontSize: 16,
      fontWeight: 500
    }
  }
}))

const Summary: React.FC<SummaryProps> = ({ onClose }) => {
  const classes = useStyles()

  const { data } = useQuery(GET_CART_TOTAL_SUMM)

  const handleCheckoutClick = (): void => {
    console.log('order')
  }

  return (
    <section className={classes.root}>
      <Grid container>
        <Box display="flex" flexWrap="wrap" width="100%" marginBottom="10px">
          <IconButton onClick={onClose} className={classes.closeCartButton}>
            <CloseIcon />
          </IconButton>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography component="p" className={classes.totalTitle}>
              Итого:&nbsp;
              <Typography component="span">{formatPrice(data.cartTotalPrice)}&nbsp;грн.</Typography>
            </Typography>
          </Box>
        </Box>
        <Grid container>
          <AppButton fullWidth withShadow={false} color="secondary" onClick={handleCheckoutClick}>
            Оформить заказ
          </AppButton>
        </Grid>
      </Grid>
    </section>
  )
}

export default Summary
