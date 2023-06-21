import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { i18n } from 'next-i18next'
import { GetStaticProps } from 'next/types'
import Catalog from '../components/pages/Catalog'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (process.env.NODE_ENV === 'development') {
    await i18n?.reloadResources()
  }
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'ru', ['common', 'catalog']))
    }
  }
}

export default function Index() {
  return <Catalog />
}
