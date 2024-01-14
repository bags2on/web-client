import React from 'react'
import clsx from 'clsx'
import CheckIcon from '../../../../../../public/assets/icons/check.svg'
import ExpandArrowIcon from '../../../../../../public/assets/icons/expand-arrow.svg'
import { useWindowSize } from '@/hooks'

import styles from './StepTitle.module.scss'

interface StepTitleProps {
  step: number
  valid: boolean
  isEdit: boolean
  onEdit(): void
  children: React.ReactNode
}

export function StepTitle({ step, valid, isEdit, onEdit, children }: StepTitleProps) {
  const [width] = useWindowSize()

  const handleTitleClick = () => {
    if (width >= 900) return
    onEdit()
  }

  return (
    <div className={clsx(styles.container, isEdit && styles.expand)} onClick={handleTitleClick}>
      <div className={clsx(styles.titleBox, isEdit && styles.titleExpand)}>
        <div
          className={clsx({
            [styles.step]: true,
            [styles.stepExpand]: isEdit,
            [styles.stepValid]: valid
          })}
        >
          {valid ? (
            <div className={clsx('svg-icon', styles.checkIcon)}>
              <CheckIcon />
            </div>
          ) : (
            <span>{step}</span>
          )}
        </div>
        <h2 className={styles.title}>{children}</h2>
        <div
          className={clsx({
            'svg-icon': true,
            [styles.expandIcon]: true,
            [styles.collapsed]: isEdit
          })}
        >
          <ExpandArrowIcon />
        </div>
      </div>
    </div>
  )
}
