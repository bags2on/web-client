import React from 'react'
import Image from 'next/image'
// import gift from '../../../assets/svg/gift.svg'
// import truck from '../../../assets/svg/truck.svg'
// import money from '../../../assets/svg/money.svg'
// import clock from '../../../assets/svg/clock.svg'
import { useTranslation } from 'react-i18next'

import { Section, List, IconWrapper, Title, Info } from './Advantages.styled'

const Advantages: React.FC = () => {
  const { t } = useTranslation()

  const items = [
    {
      title: t('home.advantages.discounts.title'),
      info: t('home.advantages.discounts.info'),
      icon: '/public/assets/gift.svg'
    },
    {
      title: t('home.advantages.delivery.title'),
      info: t('home.advantages.delivery.info'),
      icon: '/public/assets/truck.svg'
    },

    {
      title: t('home.advantages.workTime.title'),
      info: t('home.advantages.workTime.info'),
      icon: '/public/assets/clock.svg'
    },
    {
      title: t('home.advantages.payment.title'),
      info: t('home.advantages.payment.info'),
      icon: '/public/assets/money.svg'
    }
  ]

  return (
    <Section>
      <List>
        {items.map((item, ind) => {
          return (
            <li key={ind}>
              <IconWrapper>
                <Image src={item.icon} alt={item.title} width={150} height={150} />
              </IconWrapper>
              <div>
                <Title>{item.title}</Title>
                <Info>{item.info}</Info>
              </div>
            </li>
          )
        })}
      </List>
    </Section>
  )
}

export default Advantages
