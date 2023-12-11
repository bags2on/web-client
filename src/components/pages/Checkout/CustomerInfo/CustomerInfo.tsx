import React from 'react'
import StepTitle from '../common/StepTitle'
import ContinueButton from '../common/ContinueButton'
import TextInput from '@/shared/formFields/TextInput/TextInput'
import PhoneInput from '@/shared/formFields/PhoneInput'
import { useFormikContext } from 'formik'
import { CheckoutOrderType } from '@/utils/formValidationSchema'
import { animated, useSpring } from '@react-spring/web'

import styles from './CustomerInfo.module.scss'

interface CustomerInfoProps {
  isEdit: boolean
  onEdit(): void
  onContinue(): void
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ isEdit, onEdit, onContinue }) => {
  const { values } = useFormikContext<CheckoutOrderType>()

  const isValuesValid = Boolean(values.surname && values.name && values.phone && values.email)

  const slideInStyles = useSpring({
    config: { duration: 250 },
    from: { opacity: 0, height: 0 },
    to: {
      opacity: isEdit ? 1 : 0,
      height: isEdit ? 475 : 0
    }
  })

  const handleNextClick = () => {
    onContinue()
  }

  return (
    <section className={styles.container}>
      <StepTitle step={1} isEdit={isEdit} onEdit={onEdit} valid={isValuesValid}>
        Контактная информация
      </StepTitle>
      <animated.div className={styles.animated} style={{ ...slideInStyles, overflow: 'hidden' }}>
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
      </animated.div>
      <div className={styles.divider} />
    </section>
  )
}

export default CustomerInfo
