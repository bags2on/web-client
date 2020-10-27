import React from 'react'
import { FormControlLabel } from '@material-ui/core'
import MaterialCheckbox from '@material-ui/core/Checkbox'

interface CheckboxProps {
  label: string
  value: string
}

const Checkbox: React.FC<CheckboxProps> = ({ label, ...restProps }) => {
  return (
    <div>
      <FormControlLabel control={<MaterialCheckbox {...restProps} />} label={label} />
    </div>
  )
}

export default Checkbox
