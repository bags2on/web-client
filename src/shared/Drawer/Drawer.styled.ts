import styled, { css } from 'styled-components'

interface BoxStyledProps {
  $open: boolean
  $pos: 'left' | 'right' // 'left' by default
}

export const Box = styled.div<BoxStyledProps>`
  background: #fff;
  height: 100%;
  overflow: auto;
  position: fixed;
  box-shadow: ${({ $open }) => ($open ? '0 0 15px rgba(0, 0, 0, 0.5)' : 'none')};
  transition: transform 0.3s ease;
  z-index: 1000;
  ${({ $pos, $open }) => {
    switch ($pos) {
      case 'right':
        return css`
          top: 0;
          right: 0;
          transform: ${$open ? 'translateX(0)' : 'translateX(101%)'};
        `
      default:
        return css`
          top: 0;
          left: 0;
          transform: ${$open ? 'translateX(0)' : 'translateX(-101%)'};
        `
    }
  }}
`

interface BackdropStyledProps {
  $open: boolean
}

export const Backdrop = styled.div<BackdropStyledProps>`
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.2);
  -webkit-tap-highlight-color: transparent;
  ${({ $open }) =>
    $open &&
    css`
      visibility: visible;
      z-index: 999;
    `}
`
