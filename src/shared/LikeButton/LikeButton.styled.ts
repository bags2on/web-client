import styled, { css } from 'styled-components'
import IconButton from '@/shared/IconButton'

export const Button = styled(IconButton)`
  color: #f44336;
  padding: 7px;
`

interface SvgStyledProps {
  $liked: boolean
  $width: number
  $height: number
  $hide?: boolean
}

export const Svg = styled.svg<SvgStyledProps>`
  display: ${({ $hide }) => ($hide ? 'none' : 'initial')};
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  fill: transparent;
  stroke: #f44336;
  overflow: visible !important;
  stroke-width: 1.5px;
  transition: all 0.33s ease;
  & use:last-child {
    fill: #f44336;
    stroke: #f44336;
    opacity: 0;
    transform: scale(0.33);
    transform-origin: center;
  }
  ${({ $liked }) =>
    $liked &&
    css`
      stroke: transparent;
      & use:last-child {
        opacity: 1;
        transform: none;
        transition: all 0.5s cubic-bezier(0.19, 2.41, 0.45, 0.94);
      }
    `}
`
