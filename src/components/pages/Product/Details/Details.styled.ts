import Button from '@/shared/Button'
import SvgIcon from '@/shared/SvgIcon'
import styled from 'styled-components'

const BREAKPOINT = 770

export const Container = styled.section`
  padding: 10px 10px 15px 10px;
  @media ${({ theme }) => theme.media.lg} {
    padding-top: 50px;
  }
`

export const Title = styled.h1`
  font-size: 22px;
  line-height: 25px;
  font-weight: 600;
  margin: 15px 0;
  @media ${({ theme }) => theme.media.xl} {
    margin-top: 0;
    margin-bottom: 22px;
    font-size: 27px;
    line-height: 29px;
  }
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 25px;
`

export const BoxInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-basis: 100%;
  @media ${({ theme }) => theme.media.laptop} {
    flex-basis: auto;
  }
`

export const Code = styled.p`
  color: #343434;
  margin: 0;
  font-weight: 500;
  font-size: 17px;
  line-height: 17px;
  margin-left: 20px;
  & span {
    color: #939191;
  }
  @media ${({ theme }) => theme.media.xl} {
  }
`

interface AvailabilityStyledProps {
  $inStock: boolean
}

export const Availability = styled.div<AvailabilityStyledProps>`
  display: inline-flex;
  margin-bottom: 20px;
  border-radius: 12px;
  width: auto;
  padding: 7px 12px 7px 10px;
  color: ${({ $inStock }) => ($inStock ? '#57ae00' : '#8d8d8d')};
  background-color: ${({ $inStock }) => ($inStock ? '#e2f9cd' : '#e4e4e4')};
  & > span {
    font-size: 12px;
    margin-left: 5px;
    font-weight: 600;
  }
  @media ${({ theme }) => theme.media.laptop} {
    margin-bottom: 0;
  }
`

export const TheAvailabilityIcon = styled(SvgIcon)<AvailabilityStyledProps>`
  fill: ${({ $inStock }) => ($inStock ? '#57ae00' : '#8d8d8d')};
  font-size: 18px;
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
  margin-bottom: 20px;
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

export const TheOrderButtonIcon = styled(SvgIcon)`
  font-size: 30px;
  fill: #232323;
  margin-right: 10px;
  transition: all 250ms;
`

export const ButtonsWrapper = styled.div`
  margin: 30px 0 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media ${({ theme }) => theme.media.md} {
    justify-content: flex-start;
    flex-wrap: nowrap;
  }

  @media (min-width: ${BREAKPOINT}px) {
    flex-wrap: wrap;
  }
`

export const OrderNowButton = styled(Button)`
  color: #fff;
  border: none;
  padding: 18px;
  font-size: 16px;
  max-width: 500px;
  font-weight: 600;
  border-radius: 14px;
  margin-bottom: 15px;
  background-color: #232323;
  &:hover {
    background-color: #32cd32;
  }
  @media ${({ theme }) => theme.media.md} {
    margin-bottom: 0;
    margin-right: 15px;
  }

  @media (min-width: ${BREAKPOINT}px) {
    margin-bottom: 15px;
    margin-right: 0;
  }
`

export const OrderButton = styled(Button)`
  max-width: 500px;
  background-color: transparent;
  border-radius: 14px;
  font-size: 16px;
  line-height: 16px;
  text-transform: none;
  font-weight: 600;
  padding: 10px;
  color: #232323;
  border: 2px solid #232323;
  &:hover {
    & ${TheOrderButtonIcon} {
      transform: scale(1.2);
    }
  }
`
