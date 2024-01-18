import React from 'react'

interface TabContentProps {
  tabID: number
  value: number
  children?: React.ReactNode
}

export function TabContent({ tabID, value, children }: TabContentProps) {
  if (tabID !== value) {
    return null
  }
  return <div>{children}</div>
}
