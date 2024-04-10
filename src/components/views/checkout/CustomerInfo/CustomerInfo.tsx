import React from 'react'
import clsx from 'clsx'
import { StepTitle } from '../common/StepTitle'
import { Button } from '@/components/ui/Button'
import { TextInput } from '@/components/ui/text-input'
import { PhoneInput } from '@/components/ui/phone-input'
import { useFormikContext } from 'formik'
import { CheckoutOrderType } from '@/utils/formValidationSchema'

import styles from './CustomerInfo.module.scss'
import { useFormContext } from 'react-hook-form'

interface CustomerInfoProps {
  isEdit: boolean
  onEdit(): void
  onContinue(): void
}

type FieldData = {
  name: string
  surname: string
  phone: string
  email: string
}

export function CustomerInfo({ isEdit, onEdit, onContinue }: CustomerInfoProps) {
  const { values } = useFormikContext<CheckoutOrderType>()

  const {
    register,
    setValue,
    formState: { errors }
  } = useFormContext<FieldData>()

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
            <TextInput name="name" label="Имя" register={register} errors={errors} />
          </li>
          <li>
            <TextInput name="surname" label="Фамилия" register={register} errors={errors} />
          </li>
          <li>
            <PhoneInput name="phone" label="Телефон" errors={errors} setValue={setValue} />
          </li>
          <li>
            <TextInput
              name="email"
              type="email"
              label="E-mail"
              register={register}
              errors={errors}
            />
          </li>
        </ul>
        <Button
          color="accept"
          fullWidth
          disabled={!isValuesValid}
          onClick={handleNextClick}
          className={styles.continueButton}
        >
          Продолжить
        </Button>
      </div>
      <div className={styles.divider} />
    </section>
  )
}
