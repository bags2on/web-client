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

export function Select({ options, disabled }: SelectProps) {
  return <AsyncSelect isDisabled={disabled} options={options} />
}
