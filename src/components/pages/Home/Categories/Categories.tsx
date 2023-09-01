import React from 'react'
import SvgIcon from '@/shared/SvgIcon'
import FlashIcon from '../../../../../public/assets/icons/flash.svg'
import { routeNames } from '@/utils/navigation'
import { useTranslation } from 'next-i18next'

import {
  Section,
  Title,
  Link,
  InnerContainer,
  CategoryList,
  CategoryItem,
  Details,
  ImageWrapper,
  Image,
  Fallback
} from './Categories.styled'

type categoryItemType = {
  img: string
  to: string
  i18n: string
  backgroundColor: string
  borderColor: string
}

const categoriesValues: categoryItemType[] = [
  {
    img: '/assets/rastr/suitcase.png',
    to: routeNames.catalog,
    i18n: 'suitcases',
    backgroundColor: '#edfdf1',
    borderColor: '#c0e7ca'
  },
  {
    img: '/assets/rastr/wallet.png',
    to: routeNames.catalog,
    i18n: 'wallets',
    backgroundColor: '#fdfddc',
    borderColor: '#dee0af'
  },
  {
    img: '/assets/rastr/bag.png',
    to: routeNames.catalog,
    i18n: 'bags',
    backgroundColor: '#f4f4ff',
    borderColor: '#dbdbfa'
  },
  {
    img: '/assets/rastr/backpack.png',
    to: routeNames.catalog,
    i18n: 'backpacks',
    backgroundColor: '#e4fffa',
    borderColor: '#c2ebe3'
  }
]

const Categories: React.FC = () => {
  const { t } = useTranslation('home')

  return (
    <Section>
      <Title>
        <SvgIcon>
          <FlashIcon />
        </SvgIcon>
        {t('headers.categories')}
      </Title>
      <div>
        <CategoryList>
          {categoriesValues.map((category, ind) => (
            <CategoryItem key={ind}>
              <Link href={category.to}>
                <InnerContainer>
                  <ImageWrapper>
                    <Image
                      priority
                      src={category.img}
                      width={360}
                      height={360}
                      alt={`Изображение категории - ${t(`categories.${category.i18n}`)}`}
                    />
                    <Fallback
                      $background={category.backgroundColor}
                      $borderColor={category.borderColor}
                    />
                  </ImageWrapper>
                  <Details>
                    <p>{t(`categories.${category.i18n}`)}</p>
                    <span>{t(`categories.seeAll`)}</span>
                  </Details>
                </InnerContainer>
              </Link>
            </CategoryItem>
          ))}
        </CategoryList>
      </div>
    </Section>
  )
}

export default Categories
