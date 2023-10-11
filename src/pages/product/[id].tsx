import { ParsedUrlQuery } from 'querystring'
import getProduct, { QueryResult } from '../api/getProduct'
import ProductPage from '@/components/pages/Product'

import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { i18n } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { productIdFromSlug } from '@/utils/navigation'

function getRandomRating(): number {
  const min = 3
  const max = 5
  return Math.floor(Math.random() * (max - min + 1) + min)
}

interface Params extends ParsedUrlQuery {
  id: string
}

interface TodoProps {
  rating: number
}

export const getServerSideProps: GetServerSideProps<{
  product: QueryResult
  todo: TodoProps
  err: boolean
}> = async (ctx) => {
  const params = ctx.params as Params
  const slugURL = params.id

  let err = false
  let data: QueryResult

  try {
    const productId = productIdFromSlug(slugURL)
    data = await getProduct(productId)
  } catch (error) {
    err = true
  }

  if (process.env.NODE_ENV === 'development') {
    await i18n?.reloadResources()
  }

  const todo = {
    rating: getRandomRating()
  }

  return {
    props: {
      ...(await serverSideTranslations(ctx.locale ?? 'ru', ['common'])),
      product: data,
      todo,
      err
    }
  }
}

export default function ProductIndex({
  product,
  todo,
  err
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!product || err) {
    return (
      <div>
        <h1>No product</h1>
      </div>
    )
  }

  if (product.__typename === 'NotFound') {
    return (
      <div>
        <h1>No product found</h1>
      </div>
    )
  }

  return <ProductPage product={product} todo={todo} />
}
