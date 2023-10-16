import React from 'react'
import Button from '@/shared/Button'
import LetterCheckIcon from '../../../../../../public/assets/letter-check.svg'
import LetterIcon from '../../../../../../public/assets/icons/letter.svg'
import LocationIcon from '../../../../../../public/assets/icons/location.svg'

import {
  Modal,
  Container,
  ImageBox,
  SvgImage,
  OrderInfo,
  Title,
  SubTitle,
  InfoList,
  InfoItem,
  LinkToProfile,
  ButtonWrapper
} from './OrderSuccess.styled'
import SvgIcon from '@/shared/SvgIcon'
import { routeNames } from '@/utils/navigation'

interface OrderSuccessProps {
  open: boolean
  onClose(): void
}

const OrderSuccess: React.FC<OrderSuccessProps> = ({ open, onClose }) => {
  return (
    <Modal isOpen={open}>
      <Container>
        <ImageBox>
          <SvgImage>
            <LetterCheckIcon />
          </SvgImage>
        </ImageBox>
        <OrderInfo>
          <Title>Вы успешно создали заказ!</Title>
          <SubTitle>
            <p>Мы свяжемся с вами в ближайшее время для подтверждения</p>
          </SubTitle>
          <InfoList>
            <InfoItem>
              <SvgIcon>
                <LetterIcon />
              </SvgIcon>
              <p>Проверьте свой почтовый ящик для уточнения деталей</p>
            </InfoItem>
            <InfoItem>
              <SvgIcon>
                <LocationIcon />
              </SvgIcon>
              <p>
                Вы можете отследить статус покупки в&nbsp;
                <LinkToProfile href={routeNames.profile}>личном кабинете</LinkToProfile>
              </p>
            </InfoItem>
          </InfoList>
          <ButtonWrapper>
            <Button fullWidth color="secondary" onClick={onClose}>
              ok
            </Button>
          </ButtonWrapper>
        </OrderInfo>
      </Container>
    </Modal>
  )
}

export default OrderSuccess
