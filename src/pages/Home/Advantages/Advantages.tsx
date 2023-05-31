import React from 'react'
import Image from 'next/image'
// import gift from '../../../assets/svg/gift.svg'
// import truck from '../../../assets/svg/truck.svg'
// import money from '../../../assets/svg/money.svg'
// import clock from '../../../assets/svg/clock.svg'
import { useTranslation } from 'next-i18next'

import { Section, List, IconWrapper, Title, Info } from './Advantages.styled'

const Advantages: React.FC = () => {
  const { t } = useTranslation('home')

  const items = [
    {
      title: 'advantages.discounts.title',
      info: 'advantages.discounts.info',
      icon: '/assets/gift.svg'
    },
    {
      title: 'advantages.delivery.title',
      info: 'advantages.delivery.info',
      icon: '/assets/truck.svg'
    },

    {
      title: 'advantages.workTime.title',
      info: 'advantages.workTime.info',
      icon: '/assets/clock.svg'
    },
    {
      title: 'advantages.payment.title',
      info: 'advantages.payment.info',
      icon: '/assets/money.svg'
    }
  ]

  return (
    <Section>
      <List>
        {items.map((item, ind) => {
          const title = t(item.title)

          return (
            <li key={ind}>
              <IconWrapper>
                <Image src={item.icon} alt={'картинка - ' + title} width={150} height={150} />
              </IconWrapper>
              <div>
                <Title>{title}</Title>
                <Info>{t(item.info)}</Info>
              </div>
            </li>
          )
        })}
      </List>
    </Section>
  )
}

export default Advantages
