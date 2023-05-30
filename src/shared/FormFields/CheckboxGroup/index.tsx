import React, { useState } from 'react'
import Collapse, { CollapseHead } from '../../Collapse'
import Checkbox from '../Checkbox'

import { Fieldset } from './CheckboxGroup.styled'

type optionType = {
  value: string
  label: string
}

interface CheckBoxGroupProps {
  name: string
  title: string
  options: Array<optionType>
}

const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({ title, options, name }) => {
  const [isCollapsed, setCollapsed] = useState<boolean>(true)

  const handleCollapse = (): void => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div>
      <CollapseHead title={title} collapsed={isCollapsed} onCollapse={handleCollapse} />
      <Collapse open={isCollapsed}>
        <Fieldset>
          {options.map(({ label, value }) => (
            <div key={value}>
              <Checkbox name={name} label={label} value={value} />
            </div>
          ))}
        </Fieldset>
      </Collapse>
    </div>
  )
}

export default CheckBoxGroup
