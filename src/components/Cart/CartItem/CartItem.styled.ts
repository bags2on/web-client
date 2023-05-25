import styled from 'styled-components'
import IconButton from '../../../shared/IconButton'
import SvgIcon from '../../../shared/SvgIcon'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 35px;
  &::after {
    content: '';
    position: absolute;
    width: 60%;
    height: 2px;
    border-radius: inherit;
    background-color: #dcdcdc;
    bottom: -27px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  min-width: 100px;
  max-width: 180px;
  position: relative;
  margin-right: 20px;
`

export const Info = styled.div`
  width: 100%;
  max-width: 900px;
  padding-top: 5%;
`

export const Title = styled(Link)`
  display: inline-block;
  max-width: 200px;
  margin: 0;
  font-size: 19px;
  font-weight: 500;
  padding-bottom: 4px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
  &:hover,
  &:focus {
    color: orange;
    outline: none;
  }
`

export const Price = styled.span`
  color: #707070;
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
`

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`

export const Amount = styled.p`
  margin: 0;
  padding-left: 1px;
  font-size: 16px;
  font-weight: 500;
`

export const DeleteButton = styled(IconButton)`
  color: #a7a7a7;
  font-size: 12px;
  border-radius: 10px;
  padding: 0px 17px;
  background-color: ${({ theme }) => (theme.type === 'light' ? '#eeeeee' : '#363636')};
  fill: #9b9b9b;
  &:hover {
    color: #dc143c;
    fill: #434343;
  }
`

export const TheTrashIcon = styled(SvgIcon)`
  font-size: 20px;
  transition: fill 0.2s;
`
