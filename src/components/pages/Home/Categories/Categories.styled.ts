import styled, { css } from 'styled-components'
import SvgIcon from '@/shared/SvgIcon'
import NextLink from 'next/link'

export const Section = styled.section`
  margin-bottom: 15px;
`

export const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0 0 5px 10px;
`

export const CategoryList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  box-sizing: border-box;
  padding: 0;
  flex-wrap: wrap;
`

export const CategoryItem = styled.li`
  display: flex;
  width: 50%;
  flex-basis: 50%;
  @media ${({ theme }) => theme.media.tablet} {
    flex-basis: 25%;
    width: 25%;
  }
`

export const Link = styled(NextLink)`
  display: block;
  margin: 5px;
  width: 100%;
  color: inherit;
  user-select: none;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
`

interface IconWrapperStyledProps {
  $background: string
  $borderColor: string
}

export const IconWrapper = styled.div<IconWrapperStyledProps>`
  margin-right: 8px;
  border-radius: 10px;
  background-color: ${({ theme, $background }) => (theme.type === 'light' ? $background : 'none')};
  border: 1px solid
    ${({ theme, $borderColor }) => (theme.type === 'light' ? $borderColor : 'transparent')};
  @media ${({ theme }) => theme.media.tablet} {
    margin-right: 12px;

    background-color: ${({ theme, $background }) =>
      theme.type === 'light' ? $background : theme.colors.primary};
  }
`

export const CategoryIcon = styled(SvgIcon)<{ $strokeIcon: boolean }>`
  color: inherit;
  min-width: auto;
  font-size: 50px;
  padding: 5px;
  transition: all 0.2s;
  fill: ${({ theme }) => (theme.type === 'light' ? '#000' : theme.colors.primary)};
  ${({ $strokeIcon }) =>
    $strokeIcon &&
    css`
      stroke: ${({ theme }) => (theme.type === 'light' ? '#000' : theme.colors.primary)};
      @media ${({ theme }) => theme.media.tablet} {
        stroke: #000;
      }
    `}
  @media ${({ theme }) => theme.media.tablet} {
    padding: 5px;
    font-size: 57px;
    fill: #000;
  }
`

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 10px;
  transition: all 0.3s;
  border: 1px solid ${({ theme }) => (theme.type === 'light' ? '#eeeeee' : 'transparent')};
  background-color: ${({ theme }) => (theme.type === 'light' ? '#fff' : '#363636')};
  @media ${({ theme }) => theme.media.md} {
    padding: 11px 15px 11px 17px;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
      & ${CategoryIcon} {
        transform: scale(1.1);
      }
    }
  }
`

export const Details = styled.div`
  font-size: 17px;
  font-weight: 500;
  & p {
    margin: 0;
    line-height: 18px;
    @media ${({ theme }) => theme.media.lg} {
      font-weight: 600;
    }
  }

  & span {
    display: none;
    font-size: 14px;
    color: #999999;
    @media ${({ theme }) => theme.media.lg} {
      display: inline;
    }
  }
`
