import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { i18n } from 'next-i18next'
import { GetStaticProps } from 'next/types'
import { CheckoutIndex } from '@/components/pages/Checkout'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (process.env.NODE_ENV === 'development') {
    await i18n?.reloadResources()
  }
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'ru', ['common']))
    }
  }
}

export default function Checkout() {
  return <CheckoutIndex />
}
