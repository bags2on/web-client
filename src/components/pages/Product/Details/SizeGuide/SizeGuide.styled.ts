import styled, { css } from 'styled-components'

export const Title = styled.p`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 11px;
  padding-left: 2px;
`

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`

interface ListItemStyledProps {
  $inactive?: boolean
  $active?: boolean
}

export const ListItem = styled.li<ListItemStyledProps>`
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  border: 2px solid #eaeaea;
  padding: 7px 0;
  text-align: center;
  font-weight: 600;
  width: 70px;
  margin-right: 7px;
  border-radius: 12px;
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

  ${({ $inactive }) =>
    $inactive &&
    css`
      color: #7c7c7c;
      border-color: #f0f0f0;
      background-color: #f0f0f0;
      &:hover {
        border-color: #f0f0f0;
      }
    `}
`
