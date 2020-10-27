import React from 'react'
import { FieldArray, useFormikContext } from 'formik'
import Checkbox from '../Checkbox/Checkbox'

type option = {
  value: string
  label: string
}

interface CheckBoxGroupProps {
  name: string
  options: option[]
}

const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({ name, options }) => {
  const { values } = useFormikContext()

  return (
    <FieldArray
      name={name}
      render={(arrayHelpers) => options.map(({ label, value }) => <Checkbox key={value} label={label} value={value} />)}
    />
  )
}

export default CheckBoxGroup
