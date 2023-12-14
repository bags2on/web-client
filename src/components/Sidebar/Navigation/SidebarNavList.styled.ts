import styled from 'styled-components'
import SvgIcon from '@/shared/SvgIcon'

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  padding: 0 23px;
  padding-top: 20px;
`

export const ItemText = styled.div`
  margin-left: 15px;
  & > p {
    margin: 0;
    font-size: 18px;
    line-height: 18px;
    font-weight: 500;
  }
`

export const ListItem = styled.li`
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 11px 5px 11px 10px;
  border-radius: 10px;
  transition: background-color 0.3s;
  &:last-child {
    margin-bottom: 15px;
  }
  &:hover {
    background-color: ${({ theme }) => (theme.type === 'light' ? '#ededed' : '#353535')};
  }
`

export const ItemIcon = styled(SvgIcon)`
  fill: ${({ theme }) => (theme.type === 'light' ? '#343434' : theme.colors.primary)};
  font-size: 33px;
`
