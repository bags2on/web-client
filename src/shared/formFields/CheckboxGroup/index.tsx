import React, { useState } from 'react'
import { Checkbox } from '../Checkbox'
import { Collapse, CollapseHead } from '@/shared/Collapse'

import styles from './CheckboxGroup.module.scss'

type optionType = {
  value: string
  label: string
}

interface CheckBoxGroupProps {
  name: string
  title: string
  options: Array<optionType>
}

export function CheckBoxGroup({ title, options, name }: CheckBoxGroupProps) {
  const [isCollapsed, setCollapsed] = useState<boolean>(true)

  const handleCollapse = (): void => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div className={styles.container}>
      <CollapseHead title={title} collapsed={isCollapsed} onCollapse={handleCollapse} />
      <Collapse open={isCollapsed}>
        <fieldset className={styles.fieldset}>
          {options.map(({ label, value }) => (
            <div key={value}>
              <Checkbox name={name} label={label} value={value} />
            </div>
          ))}
        </fieldset>
      </Collapse>
    </div>
  )
}
