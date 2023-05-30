import React from 'react'
import styled from 'styled-components'
import SvgIcon from '../SvgIcon'
import ExpandIcon from '../../../public/assets/expand-arrow.svg'

interface CollapseHeadProps {
  collapsed: boolean
  title: string | React.ReactNode
  onCollapse(): void
}

const GroupHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;
  cursor: pointer;
`

const Title = styled.span`
  font-weight: 500;
  user-select: none;
`

const TheExpandIcon = styled(SvgIcon)<{ $collapsed: boolean }>`
  transition: all 160ms linear;
  transform: ${({ $collapsed }) => ($collapsed ? 'rotate(180deg);' : 'rotate(360deg);')};
`

export const CollapseHead: React.FC<CollapseHeadProps> = ({ title, collapsed, onCollapse }) => {
  return (
    <GroupHead onClick={onCollapse}>
      <Title>{title}</Title>
      <TheExpandIcon $collapsed={collapsed}>
        {collapsed ? <ExpandIcon /> : <ExpandIcon />}
      </TheExpandIcon>
    </GroupHead>
  )
}
