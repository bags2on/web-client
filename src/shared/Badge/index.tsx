import React from 'react'
import styled, { css } from 'styled-components'

interface BadgeProps {
  children: React.ReactNode
  content?: string | number
  color?: 'red'
  max?: number
}

const Box = styled.span`
  display: inline-flex;
  position: relative;
  flex-shrink: 0;
  vertical-align: middle;
`

const BadgeDot = styled.span<{ $color: string; $visible: boolean }>`
  color: #fff;
  background-color: ${({ $color }) => $color};
  height: 20px;
  display: flex;
  padding: 0 6px;
  z-index: 1;
  position: absolute;
  flex-wrap: wrap;
  font-size: 0.75rem;
  min-width: 20px;
  box-sizing: border-box;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  align-items: center;
  font-weight: 500;
  line-height: 1;
  align-content: center;
  border-radius: 10px;
  flex-direction: row;
  top: 0;
  right: 0;
  transform-origin: 100% 0%;
  justify-content: center;
  ${({ $visible }) =>
    $visible
      ? css`
          transform: scale(1) translate(50%, -50%);
        `
      : css`
          transform: scale(0) translate(50%, -50%);
          transition: transform 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        `}
`

const Badge: React.FC<BadgeProps> = ({ children, content, color = '#f44336', max = 100 }) => {
  let show = ''

  if (typeof content === 'number') {
    show = String(content)
    if (content > max) {
      show = max + '+'
    }
  } else {
    show = content || ''
    if (show.length > max) {
      show = max + '+'
    }
  }

  return (
    <Box>
      {children}
      <BadgeDot $color={color} $visible={!!content}>
        {show}
      </BadgeDot>
    </Box>
  )
}

export default Badge
