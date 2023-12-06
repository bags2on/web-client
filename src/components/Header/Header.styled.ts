import styled, { css } from 'styled-components'
import IconButton from '@/shared/IconButton'

const headerButton = css`
  &:hover {
    background: none;
    & svg {
      transition: all 0.3s;
    }
  }
`
export const HeaderButton = styled(IconButton)`
  ${headerButton}
`

export const CartButton = styled(IconButton)`
  ${headerButton}
  padding: 11px;
`

export const DynamicButton = styled(IconButton)`
  display: none;
  color: ${({ theme }) => theme.colors.primary};
  @media ${({ theme }) => theme.media.md} {
    display: block;
    padding: 11px;
  }
  ${headerButton}
`
