import React from 'react'
import clsx from 'clsx'
import { IconButton } from '@/shared/IconButton'
import PlusIcon from '../../../public/assets/icons/plus.svg'
import MinusIcon from '../../../public/assets/icons/minus.svg'

import styles from './AmountController.module.scss'

interface AddSubInputProps {
  amount: number
  min: number
  max?: number
  onChange(type: 'add' | 'sub', n: number): void
}

export function AmountController({ min, max, amount, onChange }: AddSubInputProps) {
  const handleAddClick = (): void => {
    if (amount >= Number(max)) return
    onChange('add', amount + 1)
  }

  const handleSubClick = (): void => {
    if (amount <= min) return
    onChange('sub', amount - 1)
  }

  return (
    <div className={styles.container}>
      <IconButton
        disableRipple
        onClick={handleSubClick}
        disabled={amount <= 1}
        aria-label="удалить одну единицу данного продукта"
        className={styles.button}
      >
        <div className={clsx('svg-icon', styles.icon)}>
          <MinusIcon />
        </div>
      </IconButton>
      <div className={styles.counter}>
        <span>{amount}</span>
      </div>
      <IconButton
        disableRipple
        onClick={handleAddClick}
        disabled={!!max && amount >= max}
        aria-label="добавить одну единицу данного продукта"
        className={styles.button}
      >
        <div className={clsx('svg-icon', styles.icon)}>
          <PlusIcon />
        </div>
      </IconButton>
    </div>
  )
}
