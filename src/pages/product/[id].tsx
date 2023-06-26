import { ParsedUrlQuery } from 'querystring'
import getProduct, { QueryResult } from '../api/getProduct'

import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'

interface Params extends ParsedUrlQuery {
  id: string
}

export const getServerSideProps: GetServerSideProps<{ product: QueryResult }> = async (ctx) => {
  const params = ctx.params as Params
  const productId = params.id

  const data = await getProduct(productId)

  return {
    props: {
      product: data
    }
  }
}

export default function ProductIndex({
  product
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <code>{JSON.stringify(product)}</code>
    </div>
  )
}
