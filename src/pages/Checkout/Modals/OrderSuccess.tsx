import React from 'react'
import Button from '../../../shared/Button/Button'
import Modal from '../../../shared/Modal'
import { ReactComponent as LetterCheckImage } from '../../../assets/svg/letter-check.svg'
import { ReactComponent as MailImage } from '../../../assets/svg/icons/mail.svg'
import { ReactComponent as PinImage } from '../../../assets/svg/icons/pin.svg'

import {
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
import SvgIcon from '../../../shared/SvgIcon'

interface OrderSuccessProps {
  open: boolean
  onClose(): void
}

const OrderSuccess: React.FC<OrderSuccessProps> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Container>
        <ImageBox>
          <SvgImage>
            <LetterCheckImage />
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
                <MailImage />
              </SvgIcon>
              <p>Проверьте свой почтовый ящик для уточнения деталей</p>
            </InfoItem>
            <InfoItem>
              <SvgIcon>
                <PinImage />
              </SvgIcon>
              <p>
                Вы можете отследить статус покупки в&nbsp;
                <LinkToProfile to="#">личном кабинете</LinkToProfile>
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
