import client from '@/apollo/apollo'
import {
  GetHomeDataQuery,
  GetHomeDataQueryVariables,
  GetHomeDataDocument
} from '@/graphql/pages/_gen_/homeData.query'

type HomeData = GetHomeDataQuery['homeData']
export type QueryResult = HomeData | undefined | null

export default async function handler(): Promise<QueryResult> {
  const { data } = await client.query<GetHomeDataQuery, GetHomeDataQueryVariables>({
    query: GetHomeDataDocument
  })

  return data.homeData
}
