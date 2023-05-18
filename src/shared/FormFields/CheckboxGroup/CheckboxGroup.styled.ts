import styled from 'styled-components'
import SvgIcon from '../../SvgIcon'

export const GroupHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;
  cursor: pointer;
`

export const Title = styled.span`
  font-weight: 500;
  user-select: none;
`

export const TheExpandIcon = styled(SvgIcon)<{ $collapsed: boolean }>`
  transition: all 160ms linear;
  transform: ${({ $collapsed }) => ($collapsed ? 'rotate(180deg);' : 'rotate(360deg);')};
`

export const Fieldset = styled.fieldset`
  border: none;
`
