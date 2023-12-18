import React from 'react'
import clsx from 'clsx'
import { useField } from 'formik'

import styles from './Checkbox.module.scss'

interface CheckboxProps {
  name: string
  value: string
  checked?: boolean
  label?: string
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
}

const Checkbox: React.FC<CheckboxProps> = ({ name, value, label, onChange, checked = false }) => {
  const [field] = useField({ name, value, type: 'checkbox' })

  const isChecked = field.checked || checked

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(event)
    if (onChange) onChange(event)
  }

  return (
    <label className={styles.labelEL}>
      <input type="checkbox" {...field} onChange={handleChange} className="hide" />
      <span className={clsx(styles.uiEl, isChecked && styles.checked)}>
        <svg width="14px" height="12px" viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </svg>
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  )
}

export default Checkbox
