import Button from '@/shared/Button'
import UILikeButton from '@/shared/LikeButton'
import SvgIcon from '@/shared/SvgIcon'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;
  overflow-x: auto;
  flex-wrap: wrap;
`

const sharedStyles = css`
  border: none;
  background-color: transparent;
  border-radius: 0;
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => (theme.type === 'light' ? '#343434' : '#fff;')};
  padding: 10px;
  border-radius: 10px;
  flex-grow: 1;
  &:hover {
    background-color: ${({ theme }) => (theme.type === 'light' ? '#ededed' : '#353535')};
  }

  @media ${({ theme }) => theme.media.desktop} {
    flex-grow: initial;
  }
`
const sharedIconStyles = css`
  height: 100%;
  margin-right: 10px;
  font-size: 18px;
  fill: ${({ theme }) => (theme.type === 'light' ? '#232323' : '#d0d0d0;')};
`

export const ControlButton = styled(Button)`
  ${sharedStyles}
`

export const ButtonIcon = styled(SvgIcon)`
  ${sharedIconStyles}
`

export const ButtonSharedIcon = styled(SvgIcon)`
  ${sharedIconStyles}
  font-size: 16px;
`

export const LikeButton = styled(UILikeButton)`
  ${sharedStyles}
  position: relative;
  flex-grow: 1;
  order: 1;
  flex-basis: 100%;

  @media ${({ theme }) => theme.media.desktop} {
    margin: 0 15px;
    order: initial;
    flex-basis: initial;
    flex-grow: 1;
    &::before {
      position: absolute;
      content: '';
      background-color: #cfcfcf;
      width: 2px;
      height: 60%;
      left: -5%;
    }

    &::after {
      position: absolute;
      content: '';
      background-color: #cfcfcf;
      width: 2px;
      height: 60%;
      right: -5%;
    }
  }
`
