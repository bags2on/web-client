import React from 'react'
import { useField } from 'formik'
import Radio from '@material-ui/core/Radio'
import MaterialRadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

type option = {
  value: string
  label: string
  disabled: boolean
}

interface RadioGroup {
  name: string
  size: 'medium' | 'small'
  options: option[]
}

const RadioGroup: React.FC<RadioGroup> = ({ size, options, ...restProps }) => {
  const [field] = useField(restProps)

  return (
    <MaterialRadioGroup {...field} {...restProps}>
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          label={option.label}
          disabled={option.disabled}
          control={<Radio size={size} />}
        />
      ))}
    </MaterialRadioGroup>
  )
}

export default RadioGroup
