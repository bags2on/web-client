import React from 'react'
import { routeNames, generateLink } from '@/utils/navigation'

import {
  Container,
  AnimatedBackground,
  InnerBox,
  Image,
  PriceBox,
  Price,
  Title
} from './MainProduct.styled'

interface MainProductProps {
  id: string
  price: number
  title?: string
}

const MainProduct: React.FC<MainProductProps> = ({ id, title, price }) => {
  return (
    <Container>
      <AnimatedBackground />
      <InnerBox href={generateLink(routeNames.product, id)}>
        <Image
          src={
            'https://res.cloudinary.com/dct4oinuz/image/upload/v1683563023/bags2on/prada-black-leather_asdgjb.png'
          }
          alt="самый рекомендуемый товар"
        />
        <PriceBox>
          <Price>
            {price}
            <span>грн.</span>
          </Price>
        </PriceBox>
        {title && <Title>{title}</Title>}
      </InnerBox>
    </Container>
  )
}

export default MainProduct
