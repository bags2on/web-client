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

export const TheTrashIcon = styled(SvgIcon)`
  fill: #858585;
  font-size: 15px;
  margin-right: 4px;
  transition: fill 0.2s;
`

export const ClearButton = styled(Button)`
  font-size: 13px;
  line-height: 14px;
  font-weight: 600;
  padding: 8px 7px;
  align-self: center;
  text-transform: none;
  border: none;
  color: #9b9b9b;
  background-color: #e1e1e1;
  margin-right: 5px;
  &:hover:not(:disabled) {
    background-color: #d7d7d7;
    & ${TheTrashIcon} {
      fill: #f44336;
    }
  }
`
