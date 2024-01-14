import React from 'react'
import clsx from 'clsx'
import { StepTitle } from '../common/StepTitle'
import { ContinueButton } from '../common/ContinueButton'
import TextInput from '@/shared/formFields/TextInput/TextInput'
import { PhoneInput } from '@/shared/formFields/PhoneInput'
import { useFormikContext } from 'formik'
import { CheckoutOrderType } from '@/utils/formValidationSchema'

import styles from './CustomerInfo.module.scss'

interface CustomerInfoProps {
  isEdit: boolean
  onEdit(): void
  onContinue(): void
}

export function CustomerInfo({ isEdit, onEdit, onContinue }: CustomerInfoProps) {
  const { values } = useFormikContext<CheckoutOrderType>()

  const isValuesValid = Boolean(values.surname && values.name && values.phone && values.email)

  const handleNextClick = () => {
    onContinue()
  }

  return (
    <section className={styles.container}>
      <StepTitle step={1} isEdit={isEdit} onEdit={onEdit} valid={isValuesValid}>
        Контактная информация
      </StepTitle>

      <div
        className={clsx({
          [styles.animated]: true,
          [styles.animatedOpen]: isEdit
        })}
      >
        <div className={styles.fields}>
          <div className={styles.field}>
            <span>Имя</span>
            <TextInput name="name" />
          </div>
          <div className={styles.field}>
            <span>Фамилия</span>
            <TextInput name="surname" />
          </div>
          <div className={styles.field}>
            <span>Телефон</span>
            <PhoneInput name="phone" />
          </div>
          <div className={styles.field}>
            <span>E-mail</span>
            <TextInput name="email" type="email" />
          </div>
        </div>
        <ContinueButton disabled={!isValuesValid} onClick={handleNextClick}>
          Продолжить
        </ContinueButton>
      </div>
      <div className={styles.divider} />
    </section>
  )
}
