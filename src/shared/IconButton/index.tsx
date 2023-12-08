import React, { useRef } from 'react'
import clsx from 'clsx'
import styles from './IconButton.module.scss'
import ScaleLoader from '@/shared/loaders/ScaleLoader'

interface IconButtonProps {
  to?: string
  type?: 'button' | 'reset' | 'submit' | undefined
  children: React.ReactNode
  loading?: boolean
  disabled?: boolean // TODO: disabled styles
  darkLoader?: boolean
  disableRipple?: boolean
  className?: string
  _сlassName?: string // TODO: delete afret migration on CSS modules
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void
}

const IconButton: React.FC<IconButtonProps> = ({
  loading,
  children,
  darkLoader,
  disableRipple = false,
  onClick,
  className,
  _сlassName,
  ...otherProps
}) => {
  const rippleEl = useRef<HTMLSpanElement | null>(null)

  const handleRippleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disableRipple) {
      const button = event.currentTarget
      const circle = document.createElement('span')
      const diameter = Math.max(button.clientWidth, button.clientHeight)
      circle.style.width = circle.style.height = `${diameter}px`
      circle.classList.add(styles['button-ripple'])

      if (rippleEl.current) {
        rippleEl.current.remove()
      }

      rippleEl.current = circle

      button.appendChild(circle)
    }

    if (onClick) {
      onClick(event)
    }
  }

  return (
    <button
      className={clsx(styles.button, _сlassName, className)}
      onClick={handleRippleClick}
      {...otherProps}
    >
      {loading ? (
        <ScaleLoader dark={darkLoader} />
      ) : (
        <span className={styles.inner}>{children}</span>
      )}
    </button>
  )
}

export default IconButton
