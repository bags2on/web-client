import React from 'react'
import styled from 'styled-components'
import SvgIcon from '@/shared/SvgIcon'
import ExpandIcon from '../../../public/assets/icons/expand-arrow.svg'

interface CollapseHeadProps {
  collapsed: boolean
  title: string | React.ReactNode
  onCollapse(): void
}

const GroupHead = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`

const Title = styled.span`
  font-weight: 500;
  user-select: none;
`

const TheExpandIcon = styled(SvgIcon)<{ $collapsed: boolean }>`
  transition: all 160ms linear;
  fill: ${({ theme }) => (theme.type === 'light' ? '#343434' : '#fff')};
  transform: ${({ $collapsed }) => ($collapsed ? 'rotate(180deg);' : 'rotate(360deg);')};
`

export const CollapseHead: React.FC<CollapseHeadProps> = ({ title, collapsed, onCollapse }) => {
  return (
    <GroupHead onClick={onCollapse}>
      <Title>{title}</Title>
      <TheExpandIcon $collapsed={collapsed}>
        <ExpandIcon />
      </TheExpandIcon>
    </GroupHead>
  )
}
