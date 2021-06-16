import React from 'react'

interface TabPanelProps {
  index: number
  value: number
  children?: React.ReactNode
}

const TabPanel: React.FC<TabPanelProps> = ({ index, value, children, ...restProps }) => {
  if (value !== index) {
    return null
  }
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...restProps}
    >
      {children}
    </div>
  )
}

export default TabPanel
