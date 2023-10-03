import styled from 'styled-components'
import Button from '@/shared/Button'

export const Container = styled.div`
  width: 100%;
  position: sticky;
  bottom: 0;
  padding: 15px 10px 25px 15px;
  background-color: ${({ theme }) => (theme.type === 'light' ? '#f3f3f3' : '#282828')};
`

export const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export const CartPrice = styled.p`
  margin: 0;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > b {
    font-size: 19px;
    font-weight: 600;
  }
`

export const OrderButton = styled(Button)`
  background-color: var(--green-light);
  font-weight: 600;
  color: #fff;
  border-radius: 14px;
`
