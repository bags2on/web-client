import React from 'react'
import clsx from 'clsx'
import Button from '@/shared/Button'
import IconButton from '@/shared/IconButton'
import CrossIcon from '../../../../public/assets/icons/cross.svg'
import TrashIcon from '../../../../public/assets/icons/trash.svg'
import { useTranslation } from 'next-i18next'
import { CartMutations } from '@/apollo/cache/mutations'

import styles from './TopControls.module.scss'
interface TopControlsProps {
  onCartClose(): void
}

const TopControls: React.FC<TopControlsProps> = ({ onCartClose }) => {
  const { t } = useTranslation()

  const handleClearButtonClick = (): void => {
    CartMutations.clearCart()
  }

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <IconButton disableRipple onClick={onCartClose} className={styles.closeButton}>
          <div className={clsx('svg-icon', styles.closeIcon)}>
            <CrossIcon />
          </div>
        </IconButton>
        <p className={styles.title}>
          <b>{t('cart.topControls.title1')}</b>&nbsp;{t('cart.topControls.title2')}
        </p>
        <Button
          color="secondary"
          onClick={handleClearButtonClick}
          className={styles.clearButton}
          startIcon={
            <div className={clsx('svg-icon', styles.trashIcon)}>
              <TrashIcon />
            </div>
          }
        >
          {t('cart.topControls.action')}
        </Button>
      </div>
    </div>
  )
}

export default TopControls
