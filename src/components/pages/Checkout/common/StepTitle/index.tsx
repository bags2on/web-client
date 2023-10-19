import React from 'react'
import styled, { css } from 'styled-components'

interface StepTitleProps {
  step: number
  valid: boolean
  isEdit: boolean
  onEdit(): void
  children: React.ReactNode
}

export const TitleWrapper = styled.div<{ $expand: boolean }>`
  position: relative;
  background-color: ${({ theme }) => (theme.type === 'light' ? '#e1e1e1' : '#343434')};
  padding: 20px 10px;
  border-radius: 10px;
  transition: all 0.3s;

  @media ${({ theme }) => theme.media.lg} {
    background-color: transparent;
    padding: 0;
  }

  ${({ $expand }) =>
    $expand &&
    css`
      background-color: transparent;
      justify-content: flex-start;
      margin-bottom: 0;
      padding-bottom: 0;
    `}
`

export const TitleBox = styled.div<{ $expand: boolean }>`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: ${({ $expand }) => ($expand ? 20 : 0)}px;
  border-radius: 10px;

  @media ${({ theme }) => theme.media.lg} {
    margin-bottom: 30px;
  }
`

export const StepNumber = styled.div<{ $valid: boolean; $expand: boolean }>`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  border-radius: 50%;
  padding: 13px;
  margin-right: 7px;
  user-select: none;
  background-color: #8b8b8b;

  @media ${({ theme }) => theme.media.lg} {
    background-color: ${({ $valid }) => ($valid ? 'var(--green-light)' : '#1e1e1e')};
  }

  ${({ $expand, $valid }) =>
    $expand &&
    css`
      background-color: ${$valid ? 'var(--green-light)' : '#1e1e1e'};
    `}
`

const Title = styled.h2`
  margin: 0;
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;

  @media ${({ theme }) => theme.media.lg} {
    font-size: 21px;
    line-height: 21px;
  }
`

const StepTitle: React.FC<StepTitleProps> = ({ step, valid, isEdit, onEdit, children }) => {
  return (
    <TitleWrapper $expand={isEdit} onClick={onEdit}>
      <TitleBox $expand={isEdit}>
        <StepNumber $valid={valid} $expand={isEdit}>
          <span>{step}</span>
        </StepNumber>
        <Title>{children}</Title>
      </TitleBox>
    </TitleWrapper>
  )
}

export default StepTitle