import React from 'react'
import styled, { css } from 'styled-components'
import { useField } from 'formik'

const COLOR = '#232323'

const Container = styled.div<{ $row: boolean }>`
  display: flex;
  flex-direction: ${({ $row }) => ($row ? 'row' : 'column')};
`

const InputBox = styled.div<{ $row: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  margin-right: ${({ $row }) => ($row ? '3%' : '0')};
`

const Label = styled.label<{ $disabled: boolean }>`
  border-radius: 100%;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  color: ${({ $disabled }) => $disabled && '#aeaeae'};
  padding: 4px 15px 3px 45px;
  position: relative;
  font-weight: 500;
  font-size: 15px;
  line-height: 15px;
  user-select: none;
  transition: all 0.5s;
  &::before,
  &::after {
    content: '';
    box-sizing: content-box;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    position: absolute;
    z-index: 1;
  }
  &::before {
    background-color: ${({ theme }) => (theme.type === 'light' ? '#dcdcdc' : '#3c4144')};
    border: 2px solid #dcdcdc;
    top: 0;
    left: 10px;
    transition: all 0.5s;
  }
  &::after {
    background-color: ${({ theme }) => (theme.type === 'light' ? '#fff' : '#3c4144')};
    top: 2px;
    left: 12px;
    transition: all 0.15s;
    transition-timing-function: ease-out;
  }

  &:hover {
    background-color: rgba(${COLOR}, 0.1);

    &::before {
      border: 2px solid;
      border-color: ${({ theme }) => (theme.type === 'light' ? COLOR : theme.colors.primary)};
      ${({ $disabled }) =>
        $disabled &&
        css`
          border-color: #dcdcdc;
        `}
    }
  }
`

const Input = styled.input`
  display: none;
  &:checked ~ ${Label} {
    &::before {
      box-sizing: content-box;
      background-color: ${({ theme }) => (theme.type === 'light' ? COLOR : theme.colors.primary)};
      border: 2px solid;
      border-color: ${({ theme }) => (theme.type === 'light' ? COLOR : theme.colors.primary)};
    }
    &::after {
      box-sizing: content-box;
      width: 12px;
      height: 12px;
      top: 6px;
      left: 16px;
    }
  }
`

type option = {
  value: string
  label: string
  disabled?: boolean
}

interface RadioGroup {
  name: string
  options: option[]
  asRow?: boolean
}

const RadioGroup: React.FC<RadioGroup> = ({ asRow = false, options, ...restProps }) => {
  const [field] = useField(restProps)

  return (
    <Container $row={asRow}>
      {options.map(({ value, label, disabled = false }, ind) => {
        const inputId = ind + value

        return (
          <InputBox key={value + ind} $row={asRow}>
            <Input
              id={inputId}
              type="radio"
              {...field}
              value={value}
              name={field.name}
              checked={value === field.value}
              disabled={disabled}
            />
            <Label $disabled={disabled} htmlFor={inputId}>
              {label}
            </Label>
          </InputBox>
        )
      })}
    </Container>
  )
}

export default RadioGroup
