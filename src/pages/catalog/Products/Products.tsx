import React from 'react'
import CatalogItem from '@/components/CatalogItem'
import Pagination from '../../../components/Pagination'
import { routeNames } from '@/utils/navigation'
import { useReactiveVar } from '@apollo/client'
import { favoriteProductsVar } from '../../../apollo/cache/variables'

import {
  Container,
  ProductList,
  ProductItem,
  NotFoundBox,
  PaginationWrapper,
  Smile,
  Message,
  ActionButton
} from './Products.styled'

interface ProductsProps {
  totalPages: number
  currentPage: number
  products:
    | Array<{
        id: string
        title: string
        instock: boolean
        currentPrice: number
        basePrice: number
        mainTag: string
        preview: string
      }>
    | undefined
  onActionButtonClick(): void
}

const Products: React.FC<ProductsProps> = ({
  totalPages,
  currentPage,
  products,
  onActionButtonClick
}) => {
  const favoriteProducts = useReactiveVar(favoriteProductsVar)

  if (products === undefined) return null

  if (!products.length) {
    return (
      <NotFoundBox>
        <div>
          <Smile>:(</Smile>
          <Message>Извините, но по вашему запросу ничего не найдено</Message>
          <ActionButton fullWidth onClick={onActionButtonClick}>
            посмотреть все
          </ActionButton>
        </div>
      </NotFoundBox>
    )
  }

  return (
    <Container>
      <ProductList>
        {products.map((product) => {
          const isFavorite = favoriteProducts.includes(product.id)

          return (
            <ProductItem key={product.id}>
              <CatalogItem
                id={product.id}
                url={product.preview}
                title={product.title}
                price={product.currentPrice}
                inStock={product.instock}
                mainTag={product.mainTag}
                basePrice={product.basePrice}
                isFavorite={isFavorite}
              />
            </ProductItem>
          )
        })}
      </ProductList>
      <PaginationWrapper>
        <Pagination route={routeNames.catalog} total={totalPages} currentPage={currentPage} />
      </PaginationWrapper>
    </Container>
  )
}

export default Products
