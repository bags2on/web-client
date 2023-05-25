import React from 'react'
import { useField } from 'formik'
import styled from 'styled-components'

//  === 'light' ? '#343434' : theme.palette.secondary.main) + '!important'

const COLOR = 'orange'

const InputBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`

const Label = styled.label`
  border-radius: 100%;
  padding: 3px 15px 3px 45px;
  cursor: pointer;
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
    background-color: #dcdcdc;
    border: 2px solid #dcdcdc;
    top: 0;
    left: 10px;
    transition: all 0.5s;
  }
  &::after {
    background-color: #ffffff;
    top: 2px;
    left: 12px;
    transition: all 0.15s;
    transition-timing-function: ease-out;
  }

  &:hover {
    background-color: rgba(${COLOR}, 0.1);
    &::before {
      border: 2px solid ${COLOR};
    }
  }
`

const Input = styled.input`
  display: none;
  &:checked ~ ${Label} {
    &::before {
      box-sizing: content-box;
      background-color: ${COLOR};
      border: 2px solid ${COLOR};
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
  disabled: boolean
}

interface RadioGroup {
  name: string
  options: option[]
}

const RadioGroup: React.FC<RadioGroup> = ({ options, ...restProps }) => {
  const [field] = useField(restProps)

  return (
    <div>
      {options.map(({ value, label }, ind) => {
        const inputId = ind + value

        return (
          <InputBox key={value + ind}>
            <Input
              id={inputId}
              type="radio"
              {...field}
              value={value}
              name={field.name}
              checked={value === field.value}
            />
            <Label htmlFor={inputId}>{label}</Label>
          </InputBox>
        )
      })}
    </div>
  )
}

export default RadioGroup
