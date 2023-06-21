import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-left: 20px;
`

export const Lang = styled.span<{ $active: boolean }>`
  cursor: pointer;
  font-weight: 500;
  color: ${({ theme }) => (theme.type === 'light' ? '#343434' : '#fff')};
  border: 1px solid #bbbbbb;
  display: block;
  padding: 6px 18px;
  font-size: 17px;
  line-height: 23px;
  user-select: none;
  margin-right: 7px;
  border-radius: 7px;
  -webkit-tap-highlight-color: transparent;
  ${({ $active, theme }) =>
    $active &&
    css`
      color: #343434;
      background-color: ${theme.colors.primary};
      border-color: #343434;
    `}
`
