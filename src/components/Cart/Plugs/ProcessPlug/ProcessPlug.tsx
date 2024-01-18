import React from 'react'
import clsx from 'clsx'
import { Button } from '@/components/ui/Button'
import EmptyCartIcon from '../../../../../public/assets/emptycart.svg'
import ArrowIcon from '../../../../../public/assets/icons/expand-arrow.svg'

import styles from './ProcessPlug.module.scss'

interface ProcessPlugProps {
  text: string
  onClose(): void
}

export function ProcessPlug({ text, onClose }: ProcessPlugProps) {
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
