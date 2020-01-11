import React from 'react'
import clsx from 'clsx'
import { Button as ButtonUI } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import ScaleLoader from './loaders/ScaleLoader'

const useStyles = makeStyles(theme => ({
  root: {
    lineHeight: 'normal',
    fontSize: '16px',
    padding: '10px 0',
    fontWeight: 600,
    color: '#fff',
    boxShadow: '0px 8px 17px rgba(0, 0, 0, .3)',
    borderRadius: '20px',
  },
  text: {
    lineHeight: '24px',
  },
  main: {
    backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main} 0%, #8E54E9  51%, #4776E6  100%)`,
  },
  secondary: {
    background: '#ff0000',
  },
}))

type CardColors = 'main' | 'secondary'

interface BottonProps {
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void
  children: React.ReactNode
  loading?: boolean
  fullWidth?: boolean
  color: CardColors
}

const Button: React.FC<BottonProps> = ({ color = 'main', children, loading, ...otherProps }: BottonProps) => {
  const classes = useStyles()

  return (
    <ButtonUI className={clsx(classes[color], classes.root)} {...otherProps}>
      {loading ? <ScaleLoader /> : <span className={classes.text}>{children}</span>}
    </ButtonUI>
  )
}

export default Button
