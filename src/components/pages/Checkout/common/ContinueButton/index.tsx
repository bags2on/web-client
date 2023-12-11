import React from 'react'
import Button from '@/shared/Button'
import styles from './ContinueButton.module.scss'

interface ContinueButtonProps {
  disabled: boolean
  children: React.ReactNode
  onClick(): void
}

const ContinueButton: React.FC<ContinueButtonProps> = ({ children, ...restProps }) => {
  return (
    <Button color="secondary" className={styles.button} fullWidth {...restProps}>
      {children}
    </Button>
  )
}

export default ContinueButton
