import React from 'react'
import clsx from 'clsx'
import { Button as ButtonUI, colors } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import ScaleLoader from './loaders/ScaleLoader'

interface BottonStyleTypes {
  withShadow: boolean
}

const useStyles = makeStyles((theme) => ({
  root: {
    lineHeight: 'normal',
    fontSize: '16px',
    padding: '10px 0',
    fontWeight: 600,
    color: '#fff',
    borderRadius: '6px',
    boxShadow: (props: BottonStyleTypes) => (props.withShadow ? '0px 8px 17px rgba(0, 0, 0, .3)' : 'none')
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
  to?: string
  type?: 'button' | 'reset' | 'submit' | undefined
  color?: CardColors
  children: React.ReactNode
  component?: React.ReactNode
  startIcon?: React.ReactNode
  loading?: boolean
  disabled?: boolean
  fullWidth?: boolean
  withShadow?: boolean
  darkLoader?: boolean
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void
}

const Button: React.FC<BottonProps> = ({
  loading,
  children,
  darkLoader,
  color = 'main',
  withShadow = true,
  ...otherProps
}: BottonProps) => {
  const classes = useStyles({ withShadow })

  return (
    <ButtonUI className={clsx(classes[color], classes.root)} {...otherProps}>
      {loading ? <ScaleLoader dark={darkLoader} /> : <span className={classes.text}>{children}</span>}
    </ButtonUI>
  )
}

export default Button
