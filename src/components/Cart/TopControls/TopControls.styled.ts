import styled from 'styled-components'
import Button from '@/shared/Button'
import IconButton from '@/shared/IconButton'
import SvgIcon from '@/shared/SvgIcon'

export const Container = styled.div`
  z-index: 100;
  position: sticky;
  top: 0;
  padding: 10px 5px;
  background-color: ${({ theme }) => (theme.type === 'light' ? '#f5f5f5' : '#282828')};
`

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CloseButton = styled(IconButton)`
  margin-left: 10px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`

export const TheCloseIcon = styled(SvgIcon)`
  fill: ${({ theme }) => (theme.type === 'light' ? '#373737' : '#fafafa')};
  font-size: 17px;
`

export const Title = styled.p`
  font-size: 20px;
  margin: 0;
  & b {
    font-weight: 600;
  }
`

export const ClearButton = styled(Button)`
  font-size: 14px;
  line-height: 14px;
  padding: 8px 7px;
  align-self: center;
  text-transform: none;
  border: none;
  color: #fff;
`

export const TheTrashIcon = styled(SvgIcon)`
  fill: #fff;
  font-size: 18px;
  margin-right: 4px;
`
