import React from 'react'
import clsx from 'clsx'
import Button from '@/shared/Button'
import EmptyCartIcon from '../../../../../public/assets/emptycart.svg'
import ArrowIcon from '../../../../../public/assets/icons/expand-arrow.svg'

import styles from './ProcessPlug.module.scss'

interface ProcessPlugProps {
  text: string
  onClose(): void
}

const ProcessPlug: React.FC<ProcessPlugProps> = ({ text, onClose }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <EmptyCartIcon />
        <p>{text}</p>
      </div>
      <Button
        fullWidth
        onClick={onClose}
        color="secondary"
        className={styles.backButton}
        startIcon={
          <div className={clsx('svg-icon', styles.icon)}>
            <ArrowIcon />
          </div>
        }
      >
        Назад
      </Button>
    </div>
  )
}

export default ProcessPlug
