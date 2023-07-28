import React from 'react'
import { useTranslation } from 'next-i18next'
import { routeNames } from '@/utils/navigation'
import {
  Container,
  LinkMark,
  LinkMarkImage,
  Info,
  PromoTitle,
  PromoPattern,
  ButtonWrapper,
  FakeButton
} from './SidePromo.styled'

const SidePromo: React.FC = () => {
  const { t } = useTranslation('home')

  return (
    <Container href={routeNames.catalog}>
      <LinkMark>
        <LinkMarkImage width={25} height={25} src="/assets/icons/expand-arrow.svg" alt="TODO" />
      </LinkMark>
      <Info>
        <PromoTitle>Скидки</PromoTitle>
        <ButtonWrapper>
          <FakeButton>{t('promo.action')}</FakeButton>
        </ButtonWrapper>
      </Info>
      <PromoPattern />
    </Container>
  )
}

export default SidePromo
