import styled, { css } from 'styled-components'
import SvgIcon from '../../../shared/SvgIcon'
import { Link as RRDLink } from 'react-router-dom'

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

export const Link = styled(RRDLink)`
  display: block;
  margin: 5px;
  width: 100%;
  color: inherit;
  user-select: none;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  -moz-appearance: none;
  -webkit-appearance: none;
`

export const CategoryIcon = styled(SvgIcon)<{ $strokeIcon: boolean }>`
  color: inherit;
  min-width: auto;
  font-size: 45px;
  margin-right: 8px;
  transition: all 0.2s;
  fill: ${({ theme }) => (theme.type === 'light' ? '#000' : theme.colors.primary)};
  ${({ $strokeIcon }) =>
    $strokeIcon &&
    css`
      stroke-width: 1px;
      stroke: ${({ theme }) => (theme.type === 'light' ? '#000' : theme.colors.primary)};
    `}
`

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  height: 75px;
  transition: all 0.3s;
  background-color: ${({ theme }) => (theme.type === 'light' ? '#fff' : '#363636')};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  @media ${({ theme }) => theme.media.md} {
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
      & ${CategoryIcon} {
        transform: scale(1.1);
      }
    }
  }
  & > span {
    margin: 0;
    font-size: 16px;
    padding-top: 4px;
    font-weight: 500;
  }
`
