import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps, InferGetStaticPropsType } from 'next/types'
import { i18n } from 'next-i18next'
import getHomeData, { QueryResult } from './api/getHomeData'

import { HomeIndex } from '../components/pages/Home'

export const getStaticProps: GetStaticProps<{ homeData: QueryResult }> = async ({ locale }) => {
  if (process.env.NODE_ENV === 'development') {
    await i18n?.reloadResources()
  }

  const homeData = await getHomeData()

  return {
    props: {
      homeData,
      ...(await serverSideTranslations(locale ?? 'ru', ['common', 'home']))
    }
  }
}

export default function Home({ homeData }: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!homeData) {
    return (
      <div>
        <h1>No home page data</h1>
      </div>
    )
  }

  return <HomeIndex sliderData={homeData.sliderData} featuredProducts={homeData.featuredProducts} />
}
