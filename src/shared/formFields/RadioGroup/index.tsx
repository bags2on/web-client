import React from 'react'
import clsx from 'clsx'
import { useField } from 'formik'

import styles from './RadioGroup.module.scss'

type option = {
  value: string
  label: string
  disabled?: boolean
}

interface RadioGroupProps {
  name: string
  options: option[]
  asRow?: boolean
}

export function RadioGroup({ asRow = false, options, ...restProps }: RadioGroupProps) {
  const [field] = useField(restProps)

  return (
    <div className={clsx(styles.container, asRow && styles.asRow)}>
      {options.map(({ value, label, disabled = false }, ind) => {
        const inputId = ind + value

        return (
          <div key={value + ind} className={clsx(styles.inputWrapper, asRow && styles.rowWrapper)}>
            <input
              id={inputId}
              type="radio"
              {...field}
              value={value}
              name={field.name}
              checked={value === field.value}
              disabled={disabled}
              className={styles.radioInput}
            />
            <label
              htmlFor={inputId}
              className={clsx(styles.label, disabled && styles.labelDisabled)}
            >
              {label}
            </label>
          </div>
        )
      })}
    </div>
  )
}
