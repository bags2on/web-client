import React from 'react'
import Grid from '@material-ui/core/Grid'
import FlatProductItem from '../../../components/FlatProductItem/FlatProductItem'
import { makeStyles } from '@material-ui/core'

type ProductType = {
  id: string
  price: number
  title: string
  imageURL: string
}

interface SideListProps {
  products: Array<ProductType>
}

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 2
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: 'none'
  },
  item: {
    margin: '8px 0'
  }
}))

const SideList: React.FC<SideListProps> = ({ products }) => {
  const classes = useStyles()

  const TEMPgenerator = (m: number, n: number): number => m + Math.floor((n - m + 1) * Math.random())

  return (
    <div className={classes.root}>
      <Grid container component="ul" className={classes.list}>
        {products.map((product: ProductType) => (
          <Grid key={product.id} item component="li" className={classes.item} xs={12}>
            <FlatProductItem
              id={product.id}
              title={product.title}
              price={product.price}
              imageURL={product.imageURL}
              discountPrice={Math.round(Math.random() * 10) === 7 ? TEMPgenerator(350, 550) : 0}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default SideList
