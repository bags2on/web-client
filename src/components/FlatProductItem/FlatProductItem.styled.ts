import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 120px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: ${({ theme }) => (theme.type === 'dark' ? '#323232' : '#fff')};
  border-radius: 10px;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  }
`

export const ImageBox = styled.div`
  width: 100%;
  max-width: 117px;
  padding: 0 5px;
`

export const InfoBox = styled.div`
  max-width: 190px;
  flex: 1 1 100%;
  min-width: 0;
  padding: 20px 10px 0 10px;
  position: relative;
  @media ${({ theme }) => theme.media.laptop} {
    position: static;
  }
`

export const PriceWrapper = styled.p`
  margin: 0;
`

export const LinkWrapper = styled(Link)`
  color: inherit;
  text-decoration: none;
`

export const Title = styled.p`
  margin: 0;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  & > a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s;
    &:hover,
    &:focus {
      outline: none;
      color: #909090;
    }
  }
`

export const Price = styled.span<{ $discount: boolean }>`
  color: #ff9900;
  & > span {
    font-size: 18px;
    font-weight: 500;
  }

  ${({ $discount }) =>
    $discount &&
    css`
      text-decoration: line-through;
      color: #909090;
      & > span {
        font-size: 14px;
      }
    `}
`

export const DiscountPrice = styled.span`
  color: #d81e1e;
  padding-left: 10px;
  & > span {
    font-size: 18px;
    font-weight: 500;
  }
`

export const LikeButtonWrapper = styled.div`
  & > button {
    padding: 0;
  }
  @media ${({ theme }) => theme.media.xl} {
    position: absolute;
    top: 43px;
    right: 14px;
    left: initial;
    & > button {
      padding: 5px;
    }
  }
  @media ${({ theme }) => theme.media.desktop} {
    top: 15px;
  }
`
