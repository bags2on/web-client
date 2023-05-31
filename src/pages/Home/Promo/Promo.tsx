import React from 'react'
import Image from 'next/image'
import { routeNames } from '@/utils/navigation'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  return (
    <Container>
      <LinkWrapper
        href={routeNames.catalog}
        // to={{
        //   pathname: routes.catalog,
        //   state: {
        //     genderType: 'FEMALE'
        //   }
        // }}
      >
        <ImageBox>
          <Image
            src="/public/assets/woman.svg"
            alt={`банер: '${t('home.promo.female')}'`}
            width={170}
            height={250}
          />
        </ImageBox>
        <Content>
          <ContentTitle>{t('home.promo.female')}</ContentTitle>
          <ButtonWrapper>
            <FakeButton>{t('home.promo.action')}</FakeButton>
          </ButtonWrapper>
        </Content>
      </LinkWrapper>
      <LinkWrapper
        href={routeNames.catalog}
        // to={{
        //   pathname: routes.catalog,
        //   state: {
        //     genderType: 'MALE'
        //   }
        // }}
      >
        <ImageBox>
          <Image
            src="/public/assets/man.svg"
            alt={`банер: '${t('home.promo.male')}'`}
            width={170}
            height={250}
          />
        </ImageBox>
        <Content>
          <ContentTitle>{t('home.promo.male')}</ContentTitle>
          <ButtonWrapper>
            <FakeButton>{t('home.promo.action')}</FakeButton>
          </ButtonWrapper>
        </Content>
      </LinkWrapper>
    </Container>
  )
}

export default Promo
