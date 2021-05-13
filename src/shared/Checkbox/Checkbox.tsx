import React from 'react'
import { useField } from 'formik'
import { FormControlLabel } from '@material-ui/core'
import MaterialCheckbox from '@material-ui/core/Checkbox'

interface CheckboxProps {
  name: string
  label: string
  value: string
  checked?: boolean
}

const Checkbox: React.FC<CheckboxProps> = ({ label, ...restProps }) => {
  const [field] = useField(restProps)

  return (
    <div>
      <FormControlLabel label={label} {...field} control={<MaterialCheckbox {...restProps} />} />
    </div>
  )
}

export default Checkbox
