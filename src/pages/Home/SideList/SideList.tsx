import React from 'react'
import Grid from '@material-ui/core/Grid'
import FlatProductItem from '../../../components/FlatProductItem/FlatProductItem'
import { makeStyles } from '@material-ui/core'

type ProductType = {
  id: string
  price: number
  title: string
  imageURL: string
  discountPrice: number
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
              discountPrice={product.discountPrice}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default SideList
