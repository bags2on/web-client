import styled, { css } from 'styled-components'

export const List = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const PaginationItem = styled.li<{ $current: boolean }>`
  display: flex;
  margin: 5px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => (theme.type === 'light' ? '#f3f4f7' : '#444444')};
  border-radius: 5px;
  font-size: 15px;
  outline: none;
  width: 35px;
  height: 35px;
  padding: 0;
  user-select: none;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.6;
  }

  ${({ $current }) =>
    $current &&
    css`
      background-color: ${({ theme }) => (theme.type === 'light' ? '#fff' : '#696C72')};
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    `}
`
