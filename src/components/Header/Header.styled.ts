import styled, { css } from 'styled-components'
import SvgIcon from '@/shared/SvgIcon'
import IconButton from '@/shared/IconButton'

export const TheMenuIcon = styled(SvgIcon)`
  fill: ${({ theme }) => theme.colors.primary};
`

export const TheHeartIcon = styled(SvgIcon)`
  font-size: 24px;
  fill: none;
  stroke: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`

export const TheProfileIcon = styled(SvgIcon)`
  font-size: 24px;
  fill: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`

export const TheCartIcon = styled(SvgIcon)`
  font-size: 27px;
  fill: ${({ theme }) => theme.colors.primary};
  stroke: ${({ theme }) => theme.colors.primary};
  @media ${({ theme }) => theme.media.md} {
    font-size: 25px;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.2);
    }
  }
`

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
