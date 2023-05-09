import styled, { css } from 'styled-components'
import IconButton from '../../../shared/IconButton'
import SvgIcon from '../../../shared/SvgIcon'

export const Container = styled.div`
  width: 100%;
  position: relative;
  padding: 15px 10px 25px 15px;
  background-color: ${({ theme }) => (theme.type === 'light' ? '#f3f3f3' : '#282828')};
`

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
`

export const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export const CloseButton = styled(IconButton)<{ $loading?: boolean }>`
  color: #8c8c8c;
  margin-right: 30px;
  ${({ $loading }) =>
    $loading &&
    css`
      position: absolute;
      top: 18px;
    `}
`

export const TheCloseIcon = styled(SvgIcon)`
  fill: '#373737';
  font-size: 17px;
`

export const CartPrice = styled.p`
  margin: 0;
  font-size: 18px;
  & > span {
    font-size: 16px;
    font-weight: 500;
  }
`
