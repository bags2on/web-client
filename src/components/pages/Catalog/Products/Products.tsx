import React from 'react'
import { Button } from '@/components/ui/Button'
import { ProductItem } from '@/components/ProductItem'
import { Pagination } from '@/components/ui/Pagination'
// import { routeNames } from '@/utils/navigation'
import { useFavoriteStore } from '@/store/favorite'

import styles from './Products.module.scss'

interface ProductsProps {
  totalPages: number
  currentPage: number
  products:
    | Array<{
        id: string
        slug: string
        title: string
        instock: boolean
        currentPrice: number
        basePrice: number
        mainTag?: string | null
        preview: string
      }>
    | undefined
  onActionButtonClick(): void
}

export function Products({
  totalPages,
  currentPage,
  products,
  onActionButtonClick
}: ProductsProps) {
  const favoriteItems = useFavoriteStore((state) => state.favoriteItems)

  const handlePagination = (page: number) => {
    console.log(`go page ${page}`)
  }

  if (products === undefined) return null

  if (!products.length) {
    return (
      <div className={styles.notFound}>
        <div>
          <p className={styles.smile}>:(</p>
          <p className={styles.message}>Извините, но по вашему запросу ничего не найдено</p>
          <Button fullWidth onClick={onActionButtonClick} className={styles.actionButton}>
            посмотреть все
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <ul className={styles.productList}>
        {products.map((product) => {
          const isFavorite = favoriteItems.includes(product.id)

          return (
            <li key={product.id} className={styles.productWrapper}>
              <ProductItem
                id={product.id}
                slug={product.slug}
                url={product.preview}
                title={product.title}
                price={product.currentPrice}
                inStock={product.instock}
                mainTag={product.mainTag || ''}
                basePrice={product.basePrice}
                isFavorite={isFavorite}
              />
            </li>
          )
        })}
      </ul>
      <div className={styles.paginationWrapper}>
        <Pagination total={totalPages} currentPage={currentPage} onChange={handlePagination} />
      </div>
    </div>
  )
}
