import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import RemoveIcon from '@material-ui/icons/Remove'
import { makeStyles } from '@material-ui/core'

interface AddSubInputProps {
  amount: number
  min: number
  max?: number
  //   startValue: number
  onChange(type: 'add' | 'sub', n: number): void
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-block'
  },
  button: {},
  show: {
    width: 20,
    display: 'inline-block',
    textAlign: 'center',
    userSelect: 'none'
  }
}))

const AmountController: React.FC<AddSubInputProps> = ({ min, max, amount, onChange }) => {
  const classes = useStyles()

  const handleAddClick = (): void => {
    if (amount >= Number(max)) return
    onChange('add', amount + 1)
  }

  const handleSubClick = (): void => {
    if (amount <= min) return
    onChange('sub', amount - 1)
  }

  return (
    <div className={classes.root}>
      <IconButton onClick={handleSubClick} disabled={amount <= 1} aria-label="удалить одну единицу данного продукта">
        <RemoveIcon />
      </IconButton>
      <div className={classes.show}>
        <span>{amount}</span>
      </div>
      <IconButton
        onClick={handleAddClick}
        disabled={!!max && amount >= max}
        aria-label="добавить одну единицу данного продукта"
      >
        <AddIcon />
      </IconButton>
    </div>
  )
}

export default AmountController
