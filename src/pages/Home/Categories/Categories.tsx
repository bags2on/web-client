import React from 'react'
import SvgIcon from '@/shared/SvgIcon'
import { routeNames } from '@/utils/navigation'
import { useTranslation } from 'next-i18next'
import BaggageIcon from '../../../../public/assets/baggage.svg'
import WalletIcon from '../../../../public/assets/wallet.svg'
import BagIcon from '../../../../public/assets/shopping-bag.svg'
import OtherIcon from '../../../../public/assets/other.svg'
import FlashIcon from '../../../../public/assets/flash.svg'

import {
  Section,
  Title,
  Link,
  InnerContainer,
  CategoryList,
  CategoryItem,
  CategoryIcon
} from './Categories.styled'

type categoryItemType = {
  icon: React.ElementType
  to: string
  i18n: string
  name: string
}

const categoriesValues: categoryItemType[] = [
  {
    icon: BaggageIcon,
    to: routeNames.catalog,
    i18n: 'suitcases',
    name: 'SUITCASE'
  },
  {
    icon: WalletIcon,
    to: routeNames.catalog,
    i18n: 'wallets',
    name: 'WALLET'
  },
  {
    icon: BagIcon,
    to: routeNames.catalog,
    i18n: 'bags',
    name: 'BAG'
  },
  {
    icon: OtherIcon,
    to: routeNames.catalog,
    i18n: 'other',
    name: ''
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
              <Link
                // href={{
                //   pathname: category.to,
                //   state: {
                //     categoryName: category.name
                //   }
                // }}
                href={category.to}
              >
                <InnerContainer>
                  <CategoryIcon $strokeIcon={category.i18n === 'wallets'}>
                    <category.icon />
                  </CategoryIcon>
                  <span>{t(`categories.${category.i18n}`)}</span>
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
