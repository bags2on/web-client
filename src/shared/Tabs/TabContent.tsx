import React from 'react'

interface TabContentProps {
  tabID: number
  value: number
  children?: React.ReactNode
}

const TabContent: React.FC<TabContentProps> = ({ tabID, value, children }) => {
  if (tabID !== value) {
    return null
  }
  return <div>{children}</div>
}

export default TabContent
