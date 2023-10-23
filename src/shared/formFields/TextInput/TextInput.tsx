import React from 'react'
import styled, { css } from 'styled-components'
import { useField } from 'formik'

interface TextInputProps {
  name: string
  type?: string
  rows?: number
  disabled?: boolean
  multiline?: boolean
  maxLength?: number
  placeholder?: string
  autoComplete?: string
  hiddenLabel?: boolean
  hideErrorMessage?: boolean
  onChange?(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
}

interface BaseInputStyles {
  $error: boolean
}

const baseStyles = css<BaseInputStyles>`
  font: inherit;
  display: block;
  color: currentColor;
  box-sizing: border-box;
  user-select: text;
  width: 100%;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: 500;
  padding: 13px 8px 11px 10px;
  margin-bottom: 5px;
  color: #fff;
  outline-width: 0;
  user-select: text;
  border-radius: 8px;
  background-color: ${({ theme }) => (theme.type === 'light' ? '#fff' : '#434343')};
  color: ${({ theme }) => (theme.type === 'light' ? '#3c4144' : '#fff')};
  border: 1px solid;
  border-color: ${({ $error }) => ($error ? '#ff182e' : '#c5c5c5')};
  -webkit-tap-highlight-color: transparent;
  transition: all 0.2s;

  &:focus {
    border-color: #5a5a5a;
  }
  &:focus::placeholder {
    opacity: 0.25;
  }
  &::placeholder {
    color: #919191;
    font-size: 14px;
    font-weight: 400;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #3d3d3d;
    border: 1px solid transparent;
  }
`

const MultilineInput = styled.textarea<BaseInputStyles>`
  ${baseStyles}
  resize: none;
`

const BaseInput = styled.input<BaseInputStyles>`
  ${baseStyles}
`

const ErrorMessage = styled.p<{ $err: boolean }>`
  height: 24px;
  font-size: 13px;
  font-weight: 500;
  margin: 0;
  color: #ff182e;
  padding-left: 10px;
  opacity: 1;
  transition: all 0.3s linear;
  transition: opacity 0.2s ease-in-out;
  user-select: none;
  opacity: ${({ $err }) => ($err ? 1 : 0)};
`

const TextInput: React.FC<TextInputProps> = ({
  autoComplete = 'off',
  hideErrorMessage = false,
  type = 'text',
  multiline = false,
  ...restProps
}) => {
  const [field, meta] = useField(restProps)

  const isErr = meta.touched && !!meta.error

  return (
    <div>
      {multiline ? (
        <MultilineInput {...field} {...restProps} $error={isErr} autoComplete={autoComplete} />
      ) : (
        <BaseInput
          {...field}
          {...restProps}
          type={type}
          autoComplete={autoComplete}
          $error={isErr}
        />
      )}
      {!hideErrorMessage && <ErrorMessage $err={isErr}>{meta.touched && meta.error}</ErrorMessage>}
    </div>
  )
}

export default TextInput
