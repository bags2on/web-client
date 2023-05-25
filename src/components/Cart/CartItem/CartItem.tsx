import React, { useState } from 'react'
import ImagePlaceholder from '../../../shared/ImagePlaceholder'
import AmountController from '../../../shared/AmountController'
import routes from '../../../utils/routes'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../../utils/helpers'
import { generateLink } from '../../../utils/links'
import { CartMutations } from '../../../apollo/cache/mutations'
import { ReactComponent as TrashIcon } from '../../../assets/svg/icons/trash.svg'

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
  amount: number
  preview: string
}

interface CartItemProps {
  product: CartItemType
  onRemove: (id: string) => void
}

const CartItem: React.FC<CartItemProps> = ({ product, onRemove }) => {
  const { id, title, preview, currentPrice, amount } = product
  const [count, setCount] = useState<number>(amount)

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
        <Link to={generateLink(routes.product, id)}>
          <ImagePlaceholder plain src={preview} altText={title} />
        </Link>
      </ImageWrapper>
      <Info>
        <Title title={title} to={generateLink(routes.product, id)}>
          {title}
        </Title>
        <Price>Цена:&nbsp;&nbsp;{formatPrice(currentPrice)}&nbsp;₴</Price>
        <Amount>
          {count}&nbsp;шт:&nbsp;&nbsp;{formatPrice(count * currentPrice)}&nbsp;грн.
        </Amount>
        <Controls>
          <AmountController min={1} max={100} amount={count} onChange={handleAmountChange} />
          <DeleteButton disableRipple onClick={handleProductRemove} aria-label={`Удалить "${title}"`}>
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
