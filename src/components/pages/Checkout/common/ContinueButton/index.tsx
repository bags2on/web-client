import React from 'react'
import styled from 'styled-components'
import UIButton from '@/shared/Button'

const Button = styled(UIButton)`
  background-color: var(--green-light);
  font-weight: 600;
  color: #fff;
  border-radius: 14px;

  @media (hover: none) {
    &:active:not(:disabled) {
      opacity: 0.6;
    }
  }

  @media ${({ theme }) => theme.media.lg} {
    display: none;
  }
`

interface ContinueButtonProps {
  disabled: boolean
  children: React.ReactNode
  onClick(): void
}

const ContinueButton: React.FC<ContinueButtonProps> = ({ children, ...restProps }) => {
  return (
    <Button color="secondary" fullWidth {...restProps}>
      {children}
    </Button>
  )
}

export default ContinueButton
