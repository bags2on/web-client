import React from 'react'
import { useTranslation } from 'next-i18next'
import { routeNames } from '@/utils/navigation'
import {
  Container,
  Info,
  PromoTitle,
  PromoPattern,
  ButtonWrapper,
  FakeButton
} from './SidePromo.styled'
import LinkBadge from '@/shared/LinkBadge'

const SidePromo: React.FC = () => {
  const { t } = useTranslation('home')

  return (
    <Container href={routeNames.catalog}>
      <LinkBadge />
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
