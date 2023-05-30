import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next/types'
import { i18n } from 'next-i18next'

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

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}
