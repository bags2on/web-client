import styled, { css } from 'styled-components'
import SvgIcon from '@/shared/SvgIcon'
import IconButton from '@/shared/IconButton'
import Link from 'next/link'

export const TheHeader = styled.header`
  position: sticky;
  z-index: 500;
  top: 0;
  left: 0;
  right: 0;
  flex-wrap: wrap;
  padding: 5px 0;
  background-color: #1e1e1e;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.05),
    0 2px 8px rgba(0, 0, 0, 0.05);
  @media ${({ theme }) => theme.media.lg} {
    position: static;
    padding: 10px 17px;
  }
  @media ${({ theme }) => theme.media.xl} {
    padding: 13px 50px;
  }
`

export const Wrapper = styled.div<{ $expanded: boolean }>`
  display: flex;
  align-items: center;
  max-width: ${({ $expanded }) => ($expanded ? 1700 : 1500)}px;
  margin: 0 auto;
`

export const LogoLink = styled(Link)`
  display: none;
  @media ${({ theme }) => theme.media.lg} {
    display: block;
    position: relative;
    top: 3px;
    width: 150px;

    @media ${({ theme }) => theme.media.xl} {
      margin: 0 40px;
    }
  }
`

export const NavList = styled.ul`
  display: none;
  padding: 0;
  margin: 0;
  list-style: none;
  & li {
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;
  }
  @media ${({ theme }) => theme.media.lg} {
    display: flex;
    align-items: center;
  }
`

export const NavListLink = styled(Link)`
  position: relative;
  @media ${({ theme }) => theme.media.lg} {
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.3s;
    &::after {
      content: '';
      position: absolute;
      border-bottom: 2px solid;
      border-bottom-color: ${({ theme }) => theme.colors.primary};
      bottom: -7px;
      left: 0;
      right: 0;
      opacity: 0;
      visibility: hidden;
      width: 0;
      z-index: 1;
      transition: all 0.3s ease;
      -moz-transition: all 0.3s ease 0s;
      -webkit-transition: all 0.3s ease 0s;
      -o-transition: all 0.3s ease 0s;
      -ms-transition: all 0.3s ease 0s;
    }
    &:hover {
      &::after {
        width: 45%;
        opacity: 1;
        visibility: visible;
      }
    }
  }
`

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
