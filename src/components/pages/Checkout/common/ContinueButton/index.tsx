import React from 'react'
import Button from '@/shared/Button'
import styles from './ContinueButton.module.scss'

interface ContinueButtonProps {
  disabled: boolean
  children: React.ReactNode
  onClick(): void
}

export function ContinueButton({ children, ...restProps }: ContinueButtonProps) {
  return (
    <Button color="secondary" className={styles.button} fullWidth {...restProps}>
      {children}
    </Button>
  )
}
