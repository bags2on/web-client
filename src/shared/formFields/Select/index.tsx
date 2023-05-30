import React from 'react'
import AsyncSelect from 'react-select'

type Option = {
  label: string
  value: string
}

interface SelectProps {
  name?: string
  disabled?: boolean
  options?: Option[]
  //   options?: Promise<Option[]>
}

const Select: React.FC<SelectProps> = ({ options, disabled }) => {
  return <AsyncSelect isDisabled={disabled} options={options} />
}

export default Select
