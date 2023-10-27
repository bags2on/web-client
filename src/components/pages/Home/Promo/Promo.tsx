import React from 'react'
import Image from 'next/image'
import LinkBadge from '@/shared/LinkBadge'
import { routeNames } from '@/utils/navigation'
import { useTranslation } from 'next-i18next'
import {
  Container,
  LinkWrapper,
  ImageBox,
  FirstContent,
  SecondContent,
  ContentTitle,
  ButtonWrapper,
  FakeButton
} from './Promo.styled'

const Promo: React.FC = () => {
  const { t } = useTranslation('home')

  return (
    <Container>
      <LinkWrapper href={routeNames.catalog}>
        <LinkBadge />
        <ImageBox>
          <Image
            src="/assets/rastr/promo-1.jpeg"
            alt={`банер: '${t('promo.firstTitle')}'`}
            width={1000}
            height={500}
          />
        </ImageBox>
        <FirstContent>
          <ContentTitle>{t('promo.firstTitle')}</ContentTitle>
          <ButtonWrapper>
            <FakeButton>{t('promo.action')}</FakeButton>
          </ButtonWrapper>
        </FirstContent>
      </LinkWrapper>
      <LinkWrapper href={routeNames.catalog}>
        <LinkBadge />
        <ImageBox>
          <Image
            src="/assets/rastr/promo-2.jpeg"
            alt={`банер: '${t('promo.secondTitle')}'`}
            width={1000}
            height={500}
          />
        </ImageBox>
        <SecondContent>
          <ContentTitle>{t('promo.secondTitle')}</ContentTitle>
          <ButtonWrapper>
            <FakeButton>{t('promo.action')}</FakeButton>
          </ButtonWrapper>
        </SecondContent>
      </LinkWrapper>
    </Container>
  )
}

export default Promo
