import React from 'react'
import { NumberFormatValues } from 'react-number-format'
import { useField } from 'formik'
import { Input, ErrorMessage } from './PhoneInput.styled'

interface PhoneInputProps {
  name: string
}

const PhoneInput: React.FC<PhoneInputProps> = ({ name }) => {
  const [field, meta] = useField({ name })

  const { onChange, ...fieldOther } = field

  const handleValueChange = (values: NumberFormatValues): void => {
    field.onChange(name)(values.value)
  }

  return (
    <div>
      <Input
        $err={Boolean(meta.touched && meta.error)}
        format="+38 (###) ###-####"
        mask="_"
        autoComplete="off"
        allowEmptyFormatting
        onValueChange={handleValueChange}
        {...fieldOther}
      />
      <ErrorMessage $err={!!meta.error}>{meta.touched && meta.error}</ErrorMessage>
    </div>
  )
}

export default PhoneInput
