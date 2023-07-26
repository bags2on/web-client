import React, { useState } from 'react'
import Link from 'next/link'
import ImagePlaceholder from '@/shared/ImagePlaceholder'
import AmountController from '@/shared/AmountController'
import { formatPrice } from '@/utils/helper'
import { routeNames, generateLink } from '@/utils/navigation'
import { CartMutations } from '../../../apollo/cache/mutations'
import TrashIcon from '../../../../public/assets/icons/trash.svg'

import {
  Container,
  ImageWrapper,
  Info,
  Title,
  Price,
  Controls,
  Amount,
  DeleteButton,
  TheTrashIcon
} from './CartItem.styled'

export type CartItemType = {
  id: string
  title: string
  currentPrice: number
  preview: string
}

interface CartItemProps {
  amount: number
  product: CartItemType
  onRemove: (id: string) => void
}

const CartItem: React.FC<CartItemProps> = ({ product, amount, onRemove }) => {
  const [count, setCount] = useState<number>(amount)

  const { id, title, preview, currentPrice } = product

  const handleAmountChange = (_: string, n: number): void => {
    CartMutations.updateProductAmount(id, n)
    setCount(n)
  }

  const handleProductRemove = () => {
    onRemove(id)
  }

  return (
    <Container>
      <ImageWrapper>
        <Link href={generateLink(routeNames.product, id)}>
          <ImagePlaceholder plain src={preview} altText={title} />
        </Link>
      </ImageWrapper>
      <Info>
        <Title title={title} href={generateLink(routeNames.product, id)}>
          {title}
        </Title>
        <Price>Цена:&nbsp;&nbsp;{formatPrice(currentPrice)}&nbsp;₴</Price>
        <Amount>
          {count}&nbsp;шт:&nbsp;&nbsp;{formatPrice(count * currentPrice)}&nbsp;грн.
        </Amount>
        <Controls>
          <AmountController min={1} max={100} amount={count} onChange={handleAmountChange} />
          <DeleteButton
            disableRipple
            onClick={handleProductRemove}
            aria-label={`Удалить "${title}"`}
          >
            <TheTrashIcon>
              <TrashIcon />
            </TheTrashIcon>
          </DeleteButton>
        </Controls>
      </Info>
    </Container>
  )
}

export default CartItem
