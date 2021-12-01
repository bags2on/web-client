import React from 'react'
import clsx from 'clsx'
import { Button as MaterialButton } from '@material-ui/core'
import ScaleLoader from '../loaders/ScaleLoader'
import { makeStyles, Theme } from '@material-ui/core'

interface BottonProps {
  to?: string
  type?: 'button' | 'reset' | 'submit' | undefined
  color?: 'main' | 'secondary'
  children: React.ReactNode
  component?: React.ReactNode
  startIcon?: React.ReactNode
  loading?: boolean
  disabled?: boolean
  fullWidth?: boolean
  disableShadow?: boolean
  darkLoader?: boolean
  className?: string
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void
}

interface styleProps {
  disableShadow: boolean
}

const useStyles = makeStyles<Theme, styleProps>((theme) => ({
  root: {
    lineHeight: 'normal',
    fontSize: '16px',
    padding: '10px 0',
    fontWeight: 600,
    color: '#fff',
    borderRadius: '6px',
    boxShadow: ({ disableShadow }) => (disableShadow ? 'none' : '0px 8px 17px rgba(0, 0, 0, .3)')
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
    color: '#343434',
    '&:hover': {
      background: '#343434',
      color: theme.palette.secondary.main
    }
  }
}))

const Button: React.FC<BottonProps> = ({
  loading,
  children,
  darkLoader,
  color = 'main',
  disableShadow = false,
  className,
  ...otherProps
}: BottonProps) => {
  const classes = useStyles({ disableShadow })

  return (
    <MaterialButton className={clsx(classes[color], classes.root, className)} {...otherProps}>
      {loading ? <ScaleLoader dark={darkLoader} /> : <span className={classes.text}>{children}</span>}
    </MaterialButton>
  )
}

export default Button
