import styled from 'styled-components'
import { PatternFormat } from 'react-number-format'

export const Input = styled(PatternFormat)<{ $err: boolean }>`
  width: 100%;
  padding: 13px;
  padding: 13px 8px 11px 10px;
  font-weight: 500;
  background-color: ${({ theme }) => (theme.type === 'light' ? '#fff' : '#3c4144')};
  border-radius: 8px;
  border: 1px solid;
  font-size: 15px;
  border-color: ${({ $err }) => ($err ? 'red' : 'rgba(0, 0, 0, 0.23)')};
  outline: none;
  line-height: inherit;
  color: ${({ theme }) => (theme.type === 'light' ? '#3c4144' : '#fff')};
  margin-bottom: 5px;
  &:hover {
    border-color: #838383;
  }
  &:focus {
    border: 1px solid #838383;
  }
  &::before,
  &::after {
    box-sizing: border-box;
  }
`

export const ErrorMessage = styled.p<{ $err: boolean }>`
  height: 24px;
  font-size: 13px;
  margin: 0;
  color: #ff182e;
  font-weight: 500;
  padding-left: 10px;
  opacity: 1;
  transition: all 0.3s linear;
  transition: opacity 0.2s ease-in-out;
  opacity: ${({ $err }) => ($err ? 1 : 0)};
`
