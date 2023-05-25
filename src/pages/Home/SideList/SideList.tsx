import React from 'react'
import FlatProductItem from '../../../components/FlatProductItem/FlatProductItem'

import { Container, ProductList, ListItem } from './SideList.styled'

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

const SideList: React.FC<SideListProps> = ({ products }) => {
  return (
    <Container>
      <ProductList>
        {products.map((product: ProductType) => (
          <ListItem key={product.id}>
            <FlatProductItem
              id={product.id}
              title={product.title}
              price={product.price}
              imageURL={product.imageURL}
              discountPrice={product.discountPrice}
            />
          </ListItem>
        ))}
      </ProductList>
    </Container>
  )
}

export default SideList
