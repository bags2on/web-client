import React from 'react'
import SvgIcon from '@/shared/SvgIcon'
import { routeNames } from '@/utils/navigation'
import { useTranslation } from 'next-i18next'
import BaggageIcon from '../../../../../public/assets/baggage.svg'
import WalletIcon from '../../../../../public/assets/wallet.svg'
import BagIcon from '../../../../../public/assets/shopping-bag.svg'
import OtherIcon from '../../../../../public/assets/other.svg'
import FlashIcon from '../../../../../public/assets/flash.svg'

import {
  Section,
  Title,
  Link,
  InnerContainer,
  Details,
  CategoryList,
  CategoryItem,
  IconWrapper,
  CategoryIcon
} from './Categories.styled'

type categoryItemType = {
  icon: React.ElementType
  to: string
  i18n: string
  name: string
  backgroundColor: string
  borderColor: string
}

const categoriesValues: categoryItemType[] = [
  {
    icon: BaggageIcon,
    to: routeNames.catalog,
    i18n: 'suitcases',
    name: 'SUITCASE',
    backgroundColor: '#edfdf1',
    borderColor: '#c0e7ca'
  },
  {
    icon: WalletIcon,
    to: routeNames.catalog,
    i18n: 'wallets',
    name: 'WALLET',
    backgroundColor: '#fdfddc',
    borderColor: '#dee0af'
  },
  {
    icon: BagIcon,
    to: routeNames.catalog,
    i18n: 'bags',
    name: 'BAG',
    backgroundColor: '#f4f4ff',
    borderColor: '#dbdbfa'
  },
  {
    icon: OtherIcon,
    to: routeNames.catalog,
    i18n: 'other',
    name: '',
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
                  <IconWrapper
                    $background={category.backgroundColor}
                    $borderColor={category.borderColor}
                  >
                    <CategoryIcon $strokeIcon={category.i18n === 'wallets'}>
                      <category.icon />
                    </CategoryIcon>
                  </IconWrapper>
                  <Details>
                    <p>{t(`categories.${category.i18n}`)}</p>
                    <span>смотреть все</span>
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
