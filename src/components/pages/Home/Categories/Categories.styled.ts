import styled, { css } from 'styled-components'
import SvgIcon from '@/shared/SvgIcon'
import NextLink from 'next/link'
import NextImage from 'next/image'

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

export const Image = styled(NextImage)`
  width: 55px;
  height: auto;
  z-index: 100;
  position: relative;
  transition: transform 0.3s;
  @media ${({ theme }) => theme.media.lg} {
    width: 75px;
  }
`

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 4px 5px 7px;
  border-radius: 10px;
  transition: all 0.3s;
  border: 1px solid ${({ theme }) => (theme.type === 'light' ? '#eeeeee' : 'transparent')};
  background-color: ${({ theme }) => (theme.type === 'light' ? '#fff' : '#363636')};
  @media ${({ theme }) => theme.media.lg} {
    padding: 11px 10px 11px 17px;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
      & ${Image} {
        transform: scale(1.1);
      }
    }
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

export const ImageWrapper = styled.div`
  margin-right: 8px;
  position: relative;
  @media ${({ theme }) => theme.media.lg} {
    margin-right: 12px;
  }
`

interface FallbackStyledProps {
  $background: string
  $borderColor: string
}

export const Fallback = styled.div<FallbackStyledProps>`
  position: absolute;
  z-index: 50;
  bottom: 6px;
  border-radius: 10px;
  height: 51%;
  width: 100%;
  background-color: ${({ $background }) => $background};
  border: 1px solid ${({ $borderColor }) => $borderColor};
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
