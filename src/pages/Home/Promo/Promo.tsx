import React from 'react'
import Image from 'next/image'
import { routeNames } from '@/utils/navigation'
import { useTranslation } from 'next-i18next'

import {
  Container,
  LinkWrapper,
  ImageBox,
  Content,
  ContentTitle,
  ButtonWrapper,
  FakeButton
} from './Promo.styled'

const Promo: React.FC = () => {
  const { t } = useTranslation('home')

  return (
    <Container>
      <LinkWrapper href={routeNames.catalog}>
        <ImageBox>
          <Image
            src="/assets/rastr/promo-male.jpg"
            alt={`банер: '${t('promo.male')}'`}
            width={1000}
            height={500}
          />
        </ImageBox>
        <Content>
          <ContentTitle>{t('promo.male')}</ContentTitle>
          <ButtonWrapper>
            <FakeButton>{t('promo.action')}</FakeButton>
          </ButtonWrapper>
        </Content>
      </LinkWrapper>
      <LinkWrapper href={routeNames.catalog}>
        <ImageBox>
          <Image
            src="/assets/rastr/promo-female.jpg"
            alt={`банер: '${t('promo.male')}'`}
            width={1000}
            height={500}
          />
        </ImageBox>
        <Content>
          <ContentTitle>{t('promo.female')}</ContentTitle>
          <ButtonWrapper>
            <FakeButton>{t('promo.action')}</FakeButton>
          </ButtonWrapper>
        </Content>
      </LinkWrapper>
    </Container>
  )
}

export default Promo
