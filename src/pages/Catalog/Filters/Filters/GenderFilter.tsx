import React from 'react'
import CheckBoxGroup from '../../../../shared/FormFields/CheckBoxGroup'
import FilterSection from '../FilterSection/FilterSection'

type option = {
  value: string
  label: string
}

interface GenderFilterProps {
  title: string
  name: string
  options: option[]
}

const GenderFilter: React.FC<GenderFilterProps> = ({ title, ...restProps }) => {
  return (
    <FilterSection title={title}>
      <CheckBoxGroup {...restProps} />
    </FilterSection>
  )
}

export default GenderFilter
