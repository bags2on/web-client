import styled from 'styled-components'
import Link from 'next/link'
import SvgIcon from '@/shared/SvgIcon'

export const Container = styled.div`
  position: relative;
  margin: 8px 3px;
  background-color: #fff;
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0px 1px 9px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  @media ${({ theme }) => theme.media.md} {
    margin: 8px 4px;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
      & .title {
        color: #000;
      }
    }
  }
`

export const ImageWrapper = styled.div<{ $outStock: boolean }>`
  position: relative;
  margin-bottom: 10px;
  opacity: ${({ $outStock }) => ($outStock ? '0.49' : '1')};
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  & > a {
    outline: none;
  }
`

export const Info = styled.div`
  padding: 0 5px;
  @media ${({ theme }) => theme.media.md} {
    padding: 0 10px;
  }
`

export const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`

interface priceStyleProps {
  $outStock: boolean
  $discount: boolean
}

export const Price = styled.div<priceStyleProps>`
  flex-basis: 75%;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  padding-top: 5px;
  color: ${({ $discount }) => ($discount ? '#f44336' : '#343434')};
  opacity: ${({ $outStock }) => ($outStock ? '0.49' : '1')};
`

export const Discount = styled.p`
  color: #999999;
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  text-decoration: line-through;
`

export const Title = styled(Link)<{ $outStock: boolean }>`
  font-size: 14px;
  font-weight: 600;
  color: #343434;
  line-height: 18px;
  height: 35px;
  display: block;
  clear: both;
  margin-bottom: 7px;
  white-space: normal;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.2s;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  opacity: ${({ $outStock }) => ($outStock ? '0.49' : '1')};
  &:hover,
  &:focus {
    outline: none;
  }

  @media ${({ theme }) => theme.media.md} {
    font-size: 14px;
  }
`

export const Tag = styled.div<{ $backgroundColor: string }>`
  position: absolute;
  top: 7px;
  right: 5px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  text-align: center;
  padding: 5px 3px;
  user-select: none;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  & span {
    font-size: 12px;
    color: #fff;
    font-weight: 500;
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding: 5px 0;
    top: 10px;
    right: 10px;
    & > span {
      font-size: 14px;
    }
  }
`

export const ActionButtonWrapper = styled.div`
  flex-basis: 25%;
  padding: 5px;
`

export const TheTrashIcon = styled(SvgIcon)`
  fill: #626262;
`
