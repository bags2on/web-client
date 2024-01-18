import React from 'react'
import clsx from 'clsx'
import { NumberFormatValues } from 'react-number-format'
import { useField } from 'formik'
import { PatternFormat } from 'react-number-format'

import styles from './PhoneInput.module.scss'

interface PhoneInputProps {
  name: string
  label?: string
}

export function PhoneInput({ name, label }: PhoneInputProps) {
  const [field, meta] = useField({ name })

  const { onChange, ...fieldOther } = field

  const handleValueChange = (values: NumberFormatValues): void => {
    field.onChange(name)(values.value)
  }

  return (
    <div>
      {label && <span className={styles.label}>{label}</span>}
      <PatternFormat
        format="+38 (###) ###-####"
        mask="_"
        autoComplete="off"
        allowEmptyFormatting
        onValueChange={handleValueChange}
        className={clsx({
          [styles.base]: true,
          [styles.error]: Boolean(meta.touched && meta.error)
        })}
        {...fieldOther}
      />
      <p
        className={clsx({
          [styles.message]: true,
          [styles.withError]: !!meta.error
        })}
      >
        {meta.touched && meta.error}
      </p>
    </div>
  )
}
