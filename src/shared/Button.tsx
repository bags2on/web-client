import React from 'react'
import clsx from 'clsx'
import { Button as ButtonUI } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import ScaleLoader from './loaders/ScaleLoader'

const useStyles = makeStyles((theme) => ({
  root: {
    lineHeight: 'normal',
    fontSize: '16px',
    padding: '10px 0',
    fontWeight: 600,
    color: '#fff',
    boxShadow: '0px 8px 17px rgba(0, 0, 0, .3)',
    borderRadius: '6px'
  },
  text: {
    lineHeight: '24px'
  },
  main: {
    background: '#363636',
    '&:hover': {
      background: '#323232'
    }
  },
  secondary: {
    background: theme.palette.secondary.main,
    color: theme.palette.primary.light,
    '&:hover': {
      opacity: '0.9',
      background: theme.palette.secondary.main // override .MuiButton-root:hover
    }
  }
}))

type CardColors = 'main' | 'secondary'

interface BottonProps {
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void
  children: React.ReactNode
  loading?: boolean
  disabled?: boolean
  fullWidth?: boolean
  type?: 'button' | 'reset' | 'submit' | undefined
  to?: string
  color: CardColors
  darkLoader?: boolean
  component?: React.ReactNode
}

const Button: React.FC<BottonProps> = ({
  color = 'main',
  children,
  darkLoader,
  loading,
  ...otherProps
}: BottonProps) => {
  const classes = useStyles()

  return (
    <ButtonUI className={clsx(classes[color], classes.root)} {...otherProps}>
      {loading ? <ScaleLoader dark={darkLoader} /> : <span className={classes.text}>{children}</span>}
    </ButtonUI>
  )
}

export default Button
