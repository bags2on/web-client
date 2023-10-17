import styled from 'styled-components'
import SvgIcon from '@/shared/SvgIcon'
import IconButton from '@/shared/IconButton'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h2`
  padding-left: 7px;
`

export const ItemsList = styled.ul`
  margin: 0;
  padding: 15px 10px 0 10px;
  list-style: none;
  max-height: 500;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #e6e6e6;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.2);
  }
`

export const ClearButton = styled(IconButton)`
  font-size: 5px;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  & svg {
    font-size: 20px;
  }
  &:hover {
    background-color: transparent;
  }
`

export const TheTrashIcon = styled(SvgIcon)`
  fill: #dc143c;
  font-size: 20px;
`
