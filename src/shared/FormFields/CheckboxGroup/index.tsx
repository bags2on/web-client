import React, { useState } from 'react'
import Collapse from '../../Collapse'
import Checkbox from '../Checkbox/Checkbox'
import { ReactComponent as ExpandIcon } from '../../../assets/svg/icons/expand-arrow.svg'

import { Fieldset, GroupHead, TheExpandIcon, Title } from './CheckboxGroup.styled'

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
      <GroupHead onClick={handleCollapse}>
        <Title>{title}</Title>
        <TheExpandIcon $collapsed={isCollapsed}>{isCollapsed ? <ExpandIcon /> : <ExpandIcon />}</TheExpandIcon>
      </GroupHead>
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
