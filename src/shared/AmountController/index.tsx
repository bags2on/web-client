import React from 'react'
import { ReactComponent as MinusIcon } from '../../assets/svg/icons/minus.svg'
import { ReactComponent as PlusIcon } from '../../assets/svg/icons/plus.svg'
import IconButton from '../IconButton'
import { Container, Counter } from './AmountController.styled'
import SvgIcon from '../SvgIcon'

interface AddSubInputProps {
  amount: number
  min: number
  max?: number
  onChange(type: 'add' | 'sub', n: number): void
}

const AmountController: React.FC<AddSubInputProps> = ({ min, max, amount, onChange }) => {
  const handleAddClick = (): void => {
    if (amount >= Number(max)) return
    onChange('add', amount + 1)
  }

  const handleSubClick = (): void => {
    if (amount <= min) return
    onChange('sub', amount - 1)
  }

  return (
    <Container>
      <IconButton
        disableRipple
        onClick={handleSubClick}
        disabled={amount <= 1}
        aria-label="удалить одну единицу данного продукта"
      >
        <SvgIcon>
          <MinusIcon />
        </SvgIcon>
      </IconButton>
      <Counter>
        <span>{amount}</span>
      </Counter>
      <IconButton
        disableRipple
        onClick={handleAddClick}
        disabled={!!max && amount >= max}
        aria-label="добавить одну единицу данного продукта"
      >
        <SvgIcon>
          <PlusIcon />
        </SvgIcon>
      </IconButton>
    </Container>
  )
}

export default AmountController
