import React from 'react'
import styled, { css } from 'styled-components'

const TabList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`

type tabStyledProps = {
  $active: boolean
  $disabled: boolean
}

const Tab = styled.li<tabStyledProps>`
  cursor: pointer;
  font-size: 14px;
  border: 2px solid #eaeaea;
  padding: 6px 12px;
  text-align: center;
  font-weight: 600;
  margin-right: 8px;
  border-radius: 8px;
  user-select: none;
  transition: all 300ms;

  &:hover {
    border-color: #232323;
  }

  ${({ $active }) =>
    $active &&
    css`
      color: #fff;
      border-color: #232323;
      background-color: #232323;
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      color: #7c7c7c;
      border-color: #f0f0f0;
      background-color: #f0f0f0;
      &:hover {
        border-color: #f0f0f0;
      }
    `}
`

interface TabsPorps {
  activeTab: number
  tabs: Array<{
    label: string
    disabled?: boolean
  }>
  onChange(tabIndex: number): void
}

const Tabs: React.FC<TabsPorps> = ({ activeTab, tabs, onChange }) => {
  const handleTabClick = (tabIndex: number, disabled: boolean): void => {
    if (disabled) return

    onChange(tabIndex)
  }

  return (
    <TabList>
      {tabs.map(({ label, disabled = false }, ind) => (
        <Tab
          key={label}
          $active={activeTab === ind}
          $disabled={disabled}
          onClick={() => handleTabClick(ind, disabled)}
        >
          {label}
        </Tab>
      ))}
    </TabList>
  )
}

export default Tabs
