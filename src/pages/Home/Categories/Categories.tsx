import React from 'react'
import SvgIcon from '../../../shared/SvgIcon'
import routes from '../../../utils/routes'
import { useTranslation } from 'react-i18next'
import { ReactComponent as BaggageIcon } from '../../../assets/svg/icons/baggage.svg'
import { ReactComponent as WalletIcon } from '../../../assets/svg/icons/wallet.svg'
import { ReactComponent as BagIcon } from '../../../assets/svg/icons/shopping-bag.svg'
import { ReactComponent as OtherIcon } from '../../../assets/svg/icons/other.svg'
import { ReactComponent as FlashIcon } from '../../../assets/svg/flash.svg'

import { Section, Title, Link, InnerContainer, CategoryList, CategoryItem, CategoryIcon } from './Categories.styled'

type categoryItemType = {
  icon: React.ElementType
  to: string
  i18n: string
  name: string
}

const categoriesValues: categoryItemType[] = [
  {
    icon: BaggageIcon,
    to: routes.catalog,
    i18n: 'suitcases',
    name: 'SUITCASE'
  },
  {
    icon: WalletIcon,
    to: routes.catalog,
    i18n: 'wallets',
    name: 'WALLET'
  },
  {
    icon: BagIcon,
    to: routes.catalog,
    i18n: 'bags',
    name: 'BAG'
  },
  {
    icon: OtherIcon,
    to: routes.catalog,
    i18n: 'all',
    name: ''
  }
]

const Categories: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Section>
      <Title>
        <SvgIcon>
          <FlashIcon />
        </SvgIcon>
        {t('home.categories')}
      </Title>
      <div>
        <CategoryList>
          {categoriesValues.map((category, ind) => (
            <CategoryItem key={ind}>
              <Link
                to={{
                  pathname: category.to,
                  state: {
                    categoryName: category.name
                  }
                }}
              >
                <InnerContainer>
                  <CategoryIcon $strokeIcon={category.i18n === 'wallets'}>
                    <category.icon />
                  </CategoryIcon>
                  <span>{t(`shared.categories.${category.i18n}`)}</span>
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
