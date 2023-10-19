import React from 'react'
import StepTitle from '../common/StepTitle'
import TextInput from '@/shared/formFields/TextInput/TextInput'
import PhoneInput from '@/shared/formFields/PhoneInput'
import { useFormikContext } from 'formik'
import { CheckoutOrderType } from '@/utils/formValidationSchema'
import { animated, useSpring } from 'react-spring'

import {
  Container,
  AnimatedBox,
  FieldsWrapper,
  Field,
  ContinueButton,
  Divider
} from './CustomerInfo.styled'

interface CustomerInfoProps {
  isEdit: boolean
  onEdit(): void
  onContinue(): void
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ isEdit, onEdit, onContinue }) => {
  const { values } = useFormikContext<CheckoutOrderType>()

  const slideInStyles = useSpring({
    config: { duration: 250 },
    from: { opacity: 0, height: 0 },
    to: {
      opacity: isEdit ? 1 : 0,
      height: isEdit ? 445 : 0
    }
  })

  const handleNextClick = () => {
    onContinue()
  }

  return (
    <Container>
      <StepTitle
        step={1}
        isEdit={isEdit}
        onEdit={onEdit}
        valid={Boolean(values.surname && values.name && values.phone && values.email)}
      >
        Контактная информация
      </StepTitle>
      <AnimatedBox as={animated.div} style={{ ...slideInStyles, overflow: 'hidden' }}>
        <FieldsWrapper>
          <Field>
            <span>Имя</span>
            <TextInput name="name" />
          </Field>
          <Field>
            <span>Фамилия</span>
            <TextInput name="surname" />
          </Field>
          <Field>
            <span>Телефон</span>
            <PhoneInput name="phone" />
          </Field>
          <Field>
            <span>E-mail</span>
            <TextInput name="email" type="email" />
          </Field>
        </FieldsWrapper>
        <ContinueButton fullWidth onClick={handleNextClick}>
          Продолжить
        </ContinueButton>
      </AnimatedBox>
      <Divider />
    </Container>
  )
}

export default CustomerInfo
