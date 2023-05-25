import React from 'react'
import routes from '../../../utils/routes'
import manImage from '../../../assets/svg/man.svg'
import womanImage from '../../../assets/svg/woman.svg'
import { useTranslation } from 'react-i18next'

import { Container, LinkWrapper, ImageBox, Content, ContentTitle, ButtonWrapper, FakeButton } from './Promo.styled'

const Promo: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <LinkWrapper
        to={{
          pathname: routes.catalog,
          state: {
            genderType: 'FEMALE'
          }
        }}
      >
        <ImageBox>
          <img src={womanImage} alt={`банер: '${t('home.promo.female')}'`} />
        </ImageBox>
        <Content>
          <ContentTitle>{t('home.promo.female')}</ContentTitle>
          <ButtonWrapper>
            <FakeButton>{t('home.promo.action')}</FakeButton>
          </ButtonWrapper>
        </Content>
      </LinkWrapper>
      <LinkWrapper
        to={{
          pathname: routes.catalog,
          state: {
            genderType: 'MALE'
          }
        }}
      >
        <ImageBox>
          <img src={manImage} alt={`банер: '${t('home.promo.male')}'`} />
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
