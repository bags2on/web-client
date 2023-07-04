import { ParsedUrlQuery } from 'querystring'
import getProduct, { QueryResult } from '../api/getProduct'
import ProductPage from '@/components/pages/Product'

import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { i18n } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface Params extends ParsedUrlQuery {
  id: string
}

export const getServerSideProps: GetServerSideProps<{ product: QueryResult }> = async (ctx) => {
  const params = ctx.params as Params
  const productId = params.id

  const data = await getProduct(productId)

  if (process.env.NODE_ENV === 'development') {
    await i18n?.reloadResources()
  }

  return {
    props: {
      ...(await serverSideTranslations(ctx.locale ?? 'ru', ['common'])),
      product: data
    }
  }
}

export default function ProductIndex({
  product
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!product) {
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

  return <ProductPage product={product} />
}
