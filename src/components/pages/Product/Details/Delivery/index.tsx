import React from 'react'
import Image from 'next/image'
import styled, { css } from 'styled-components'

const DeliveryList = styled.ul`
  margin-top: 28px;
  list-style: none;
  padding: 0;
`

const DeliveryItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  line-height: 15px;
  font-weight: 500;
  margin-bottom: 13px;
  @media ${({ theme }) => theme.media.lg} {
    font-size: 15px;
  }
  & p {
    margin: 0;
    text-align: right;
  }
`

const Info = styled.div`
  display: flex;
  align-items: center;

  & p {
    margin-left: 7px;
    text-align: left;
  }
`

const Description = styled.p<{ $free: boolean }>`
  ${({ $free }) =>
    $free &&
    css`
      color: #343434;
      background-color: #ffff83;
      border-radius: 12px;
      padding: 4px 6px;
    `}
`

interface DeliveryProps {
  free: boolean
}

const Delivery: React.FC<DeliveryProps> = ({ free }) => {
  return (
    <DeliveryList>
      <DeliveryItem>
        <Info>
          <Image
            src="/assets/icons/novaposta.svg"
            width={30}
            height={30}
            alt={'В отделение «Нова пошта»'}
          />
          <p>В отделение «Нова пошта»</p>
        </Info>
        <Description $free={free}>{free ? 'Бесплатно' : 'от 100 ₴'}</Description>
      </DeliveryItem>
      <DeliveryItem>
        <Info>
          <Image
            src="/assets/icons/novaposta.svg"
            width={30}
            height={30}
            alt={'Курьер Новой Почты по вашему адресу'}
          />
          <p>Курьер по вашему адресу</p>
        </Info>
        <p>по тарифам перевозчика</p>
      </DeliveryItem>
      <DeliveryItem>
        <Info>
          <Image
            src="/assets/icons/ukrposta.svg"
            width={31}
            height={31}
            alt={'В отделение «Укрпошта»'}
          />
          <p>В отделение «Укрпошта»</p>
        </Info>
        <Description $free={free}>{free ? 'Бесплатно' : 'по тарифам перевозчика'}</Description>
      </DeliveryItem>
    </DeliveryList>
  )
}

export default Delivery
