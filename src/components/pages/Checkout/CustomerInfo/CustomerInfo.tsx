import React from 'react'
import clsx from 'clsx'
import { StepTitle } from '../common/StepTitle'
import { ContinueButton } from '../common/ContinueButton'
import { TextInput } from '@/components/ui/TextInput'
import { PhoneInput } from '@/components/ui/PhoneInput'
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
        <ul className={styles.fields}>
          <li>
            <TextInput name="name" label="Имя" />
          </li>
          <li>
            <TextInput name="surname" label="Фамилия" />
          </li>
          <li>
            <PhoneInput name="phone" label="Телефон" />
          </li>
          <li>
            <TextInput name="email" type="email" label="E-mail" />
          </li>
        </ul>
        <ContinueButton disabled={!isValuesValid} onClick={handleNextClick}>
          Продолжить
        </ContinueButton>
      </div>
      <div className={styles.divider} />
    </section>
  )
}
