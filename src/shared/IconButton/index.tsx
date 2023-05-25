import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import ScaleLoader from '../loaders/ScaleLoader'

interface IconButtonProps {
  to?: string
  type?: 'button' | 'reset' | 'submit' | undefined
  children: React.ReactNode
  loading?: boolean
  disabled?: boolean // TODO: disabled styles
  darkLoader?: boolean
  disableRipple?: boolean
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void
}

const RIPPLE_CLASSNAME = 'button-ripple'

const ripple = keyframes`
  to {
    transform: scale(1.4);
    opacity: 0;
  }
`

const Button = styled.button`
  color: inherit;
  border: none;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: 0;
  z-index: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  -moz-appearance: none;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  flex: 0 0 auto;
  padding: 12px;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;

  & .${RIPPLE_CLASSNAME} {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    position: absolute;
    border-radius: inherit;
    pointer-events: none;
    background-position: center;
    transform: scale(0);
    animation: ${ripple} 600ms linear;
    background-color: currentColor;
    opacity: 0.5;
  }
`

const ButtonLabel = styled.span`
  width: 100%;
  display: flex;
  align-items: inherit;
  justify-content: inherit;
`

const IconButton: React.FC<IconButtonProps> = ({
  loading,
  children,
  darkLoader,
  disableRipple = false,
  onClick,
  ...otherProps
}) => {
  const rippleEl = useRef<HTMLSpanElement | null>(null)

  const handleRippleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disableRipple) {
      const button = event.currentTarget
      const circle = document.createElement('span')
      const diameter = Math.max(button.clientWidth, button.clientHeight)
      circle.style.width = circle.style.height = `${diameter}px`
      circle.classList.add(RIPPLE_CLASSNAME)

      if (rippleEl.current) {
        rippleEl.current.remove()
      }

      rippleEl.current = circle

      button.appendChild(circle)
    }

    if (onClick) {
      onClick(event)
    }
  }

  return (
    <Button {...otherProps} onClick={handleRippleClick}>
      {loading ? <ScaleLoader dark={darkLoader} /> : <ButtonLabel>{children}</ButtonLabel>}
    </Button>
  )
}

export default IconButton
