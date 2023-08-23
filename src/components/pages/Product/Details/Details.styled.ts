import styled from 'styled-components'
import SharedLikeButton from '@/shared/LikeButton'
import SvgIcon from '@/shared/SvgIcon'
import Button from '@/shared/Button'

export const Container = styled.section`
  padding: 10px 10px 15px 10px;
  @media ${({ theme }) => theme.media.lg} {
    padding-top: 50px;
  }
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
  font-size: 14px;
  margin-bottom: 17px;
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 25px;
`

interface AvailabilityStyledProps {
  $inStock: boolean
}

export const Availability = styled.div<AvailabilityStyledProps>`
  display: inline-flex;
  margin-right: 30px;
  border-radius: 15px;
  width: auto;
  padding: 7px 8px;
  color: ${({ $inStock }) => ($inStock ? '#57ae00' : '#8d8d8d')};
  background-color: ${({ $inStock }) => ($inStock ? '#e2f9cd' : '#e4e4e4')};
  & > span {
    font-size: 13px;
    margin-left: 5px;
    font-weight: 600;
  }
  @media ${({ theme }) => theme.media.md} {
    margin-right: 80px;
  }
`

export const TheAvailabilityIcon = styled(SvgIcon)<AvailabilityStyledProps>`
  fill: ${({ $inStock }) => ($inStock ? '#57ae00' : '#8d8d8d')};
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
  font-weight: 600;
  & span {
    font-size: 25px;
  }
`

export const DiscountPriceBox = styled.div`
  color: #f44336;
  margin-bottom: 3px;
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

export const DescriptionWrapper = styled.div`
  margin-top: 20px;
  & > div {
    padding-left: 0;
  }
`

export const Description = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`

export const DescriptionTitle = styled.p`
  font-size: 20px;
  margin: 10px 0;
  font-weight: 600;
`

export const TheOrderButtonIcon = styled(SvgIcon)`
  font-size: 30px;
  fill: #fff;
  margin-right: 10px;
  transition: all 250ms;
`

export const OrderButton = styled(Button)`
  width: 100%;
  max-width: 300px;
  background-color: #32cd32;
  border-radius: 14px;
  font-size: 15px;
  line-height: 16px;
  text-transform: none;
  font-weight: 600;
  color: #fff;
  border: none;
  &:hover {
    & ${TheOrderButtonIcon} {
      transform: scale(1.2);
    }
  }
  @media ${({ theme }) => theme.media.lg} {
    font-size: 16px;
    padding: 10px;
  }
`

export const OrderButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  @media ${({ theme }) => theme.media.md} {
    justify-content: flex-start;
  }
`

export const LikeButton = styled(SharedLikeButton)`
  margin-left: 15px;
  padding: 18px;
  background-color: ${({ theme }) => (theme.type === 'light' ? '#f6f6f6' : '#363636')};
  border-radius: 14px;
  &:hover {
    background-color: ${({ theme }) => (theme.type === 'light' ? '#f3f3f3' : '#363636')};
  }
  @media ${({ theme }) => theme.media.lg} {
    padding: 13px;
  }
`
