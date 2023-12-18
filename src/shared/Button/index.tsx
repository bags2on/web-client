import React, { forwardRef } from 'react'
import clsx from 'clsx'
import Loader from '@/shared/loaders/ScaleLoader'
import styles from './Button.module.scss'

enum ButtonColor {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  danger = 'danger'
}

interface BottonProps {
  to?: string
  type?: 'button' | 'reset' | 'submit'
  color?: 'primary' | 'secondary' | 'success' | 'danger'
  children: React.ReactNode
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  loading?: boolean
  disabled?: boolean
  fullWidth?: boolean
  withShadow?: boolean
  tabIndex?: number
  ref?: React.RefObject<HTMLButtonElement> | null
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void
  className?: string
}

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, BottonProps> = (
  {
    loading,
    children,
    color,
    withShadow = false,
    startIcon,
    endIcon,
    type = 'button',
    fullWidth,
    className,
    ...otherProps
  },
  ref
) => {
  let colorClass: string

  switch (color as ButtonColor) {
    case ButtonColor.secondary:
      colorClass = styles.secondary
      break
    case ButtonColor.success:
      colorClass = styles.success
      break
    case ButtonColor.danger:
      colorClass = styles.danger
      break

    default:
      colorClass = styles.primary
      break
  }

  return (
    <button
      ref={ref}
      className={clsx(
        {
          [styles.base]: true,
          [styles.fullWidth]: fullWidth,
          [styles.withShadow]: withShadow
        },
        colorClass,
        className
      )}
      type={type}
      {...otherProps}
    >
      {!loading && startIcon}
      {loading ? (
        <div className={styles.loader}>
          <Loader dark={color !== ButtonColor.primary} />
        </div>
      ) : (
        <span>{children}</span>
      )}
      {!loading && endIcon}
    </button>
  )
}

export default forwardRef(Button)
