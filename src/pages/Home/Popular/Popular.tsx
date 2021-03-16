import React from 'react'
import Typography from '@material-ui/core/Typography'
import ProductsSlider from '../../../components/ProductsSlider/ProductsSlider'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 10px',
    marginBottom: 15,
    [theme.breakpoints.up('laptop')]: {
      padding: '0 30px 0 10px'
    }
  },
  title: {
    fontSize: '23px',
    fontWeight: 600,
    marginLeft: '10px',
    marginBottom: '15px'
  },
  item: {
    backgroundColor: theme.palette.secondary.main,
    height: 230,
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 500,
    fontSize: 25,
    transition: 'opacity 0.2s',
    '&:hover': {
      opacity: 0.9
    }
  }
}))

const Popular: React.FC = () => {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <Typography className={classes.title} component="h2">
        Популярное
      </Typography>
      <ProductsSlider>
        {Array(7)
          .fill(1)
          .map((_, k) => (
            <div className={classes.item} key={k}>
              {k + 1}
            </div>
          ))}
      </ProductsSlider>
    </section>
  )
}

export default Popular
