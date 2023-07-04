import styled from 'styled-components'
import SharedLikeButton from '@/shared/LikeButton'
import SvgIcon from '@/shared/SvgIcon'
import Button from '@/shared/Button'

export const Container = styled.section`
  padding: 10px 10px 15px 10px;
`

export const Title = styled.h1`
  font-size: 29px;
  font-weight: 600;
  line-height: 30px;
  margin: 0;
  margin-bottom: 10px;
`

export const Code = styled.p`
  color: #939191;
  margin: 0;
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 17px;
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

interface AvailabilityStyledProps {
  $inStock: boolean
}

export const Availability = styled.div<AvailabilityStyledProps>`
  display: inline-flex;
  margin-right: 30px;
  margin-bottom: 25px;
  border-radius: 15px;
  width: auto;
  padding: 7px 8px;
  color: #fff;
  background-color: ${({ $inStock }) => ($inStock ? '#32CD32' : '#c0c0c0')};
  & > span {
    font-size: 13px;
    margin-left: 5px;
    font-weight: 600;
  }
  @media ${({ theme }) => theme.media.md} {
    margin-right: 80px;
  }
`

export const TheAvailabilityIcon = styled(SvgIcon)`
  fill: #fff;
  font-size: 20px;
  margin-right: 3px;
`

export const RatingWrapper = styled.div`
  margin-bottom: 25px;
`

export const CurrentPrice = styled.p`
  margin: 0;
  font-size: 29px;
  line-height: 29px;
  font-weight: 500;
`

export const DiscountPriceBox = styled.div`
  color: #f44336;
`

export const Discount = styled.span`
  color: #999999;
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  text-decoration: line-through;
`

export const Percentage = styled.span`
  color: #fff;
  margin-left: 7px;
  font-weight: 600;
  border-radius: 8px;
  padding: 2px 3px;
  background-color: #f44336;
`

export const Description = styled.div`
  font-size: 16px;
  line-height: 1.5;
  margin-top: 20px;
  & > p {
    margin: 0;
    padding-bottom: 6px;
    font-weight: 600;
  }
`

export const ActionButton = styled(Button)`
  max-width: 300;
  background-color: #32cd32;
  border-radius: 10px;
  font-size: 18px;
  line-height: 18px;
  text-transform: none;
  font-weight: 500;
  color: #fff;
  transition: all 0.1s;
  &:hover {
    background-color: #4bea4b;
  }
`

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  @media ${({ theme }) => theme.media.md} {
    justify-content: flex-start;
  }
`

export const LikeButton = styled(SharedLikeButton)`
  margin-left: 10px;
  background-color: ${({ theme }) => (theme.type === 'light' ? '#f3f3f3' : '#363636')};
  border-radius: 10px;
  &:hover {
    background-color: ${({ theme }) => (theme.type === 'light' ? '#f3f3f3' : '#363636')};
  }
`
