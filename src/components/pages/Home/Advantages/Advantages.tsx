import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { Section, List, IconWrapper, Title, Info, BottomLine } from './Advantages.styled'

const Advantages: React.FC = () => {
  const { t } = useTranslation('home')

  const items = [
    {
      title: 'advantages.discounts.title',
      info: 'advantages.discounts.info',
      icon: '/assets/icons/gift.svg'
    },
    {
      title: 'advantages.delivery.title',
      info: 'advantages.delivery.info',
      icon: '/assets/icons/truck.svg'
    },

    {
      title: 'advantages.workTime.title',
      info: 'advantages.workTime.info',
      icon: '/assets/icons/clock.svg'
    },
    {
      title: 'advantages.payment.title',
      info: 'advantages.payment.info',
      icon: '/assets/icons/money.svg'
    }
  ]

  return (
    <>
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
      <BottomLine />
    </>
  )
}

export default Advantages
