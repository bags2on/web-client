import React from 'react'
import Link from 'next/link'
import { Modal } from '@/components/Modal'
import { Button } from '@/shared/Button'
import LetterCheckIcon from '../../../../../../public/assets/letter-check.svg'
import LetterIcon from '../../../../../../public/assets/icons/letter.svg'
import LocationIcon from '../../../../../../public/assets/icons/location.svg'
import { routeNames } from '@/utils/navigation'

import styles from './OrderSuccess.module.scss'

interface OrderSuccessModalProps {
  open: boolean
  onClose(): void
}

export function OrderSuccessModal({ open, onClose }: OrderSuccessModalProps) {
  return (
    <Modal open={open}>
      <div className={styles.container}>
        <div className={styles.imageBox}>
          <div className={styles.image}>
            <LetterCheckIcon />
          </div>
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>Вы успешно создали заказ!</h3>
          <div className={styles.subTitle}>
            <p>Мы свяжемся с вами в ближайшее время для подтверждения</p>
          </div>
          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              <div className="svg-icon">
                <LetterIcon />
              </div>
              <p>Проверьте свой почтовый ящик для уточнения деталей</p>
            </li>
            <li className={styles.infoItem}>
              <div className="svg-icon">
                <LocationIcon />
              </div>
              <p>
                Вы можете отследить статус покупки в&nbsp;
                <Link href={routeNames.profile} className={styles.linkToProfile}>
                  личном кабинете
                </Link>
              </p>
            </li>
          </ul>
          <div className={styles.buttonWrapper}>
            <Button fullWidth color="secondary" onClick={onClose}>
              Ok
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
