import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 95px;
  display: flex;
  justify-content: space-around;
  font-weight: 400;
  font-size: 18px;
  border: 1px solid #bfbfbf;
  border-radius: 12px;
  padding: 4px 0;
  margin-left: 10px;
`

export const Lang = styled.span<{ $active: boolean }>`
  cursor: pointer;
  color: ${({ theme }) => (theme.type === 'light' ? '#343434' : '#fff')};
  display: block;
  padding: 2px 5px 4px 5px;
  font-size: 21px;
  line-height: 23px;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -moz-appearance: none;
  -webkit-appearance: none;
  ${({ $active, theme }) =>
    $active &&
    css`
      background-color: ${theme.colors.primary};
      border-radius: 11px;
      color: #343434;
    `}
`
