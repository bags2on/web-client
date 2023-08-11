import styled from 'styled-components'
import SvgIcon from '@/shared/SvgIcon'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const List = styled.ul`
  display: inline-flex;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const TheStarIcon = styled(SvgIcon)<{ $active: boolean }>`
  fill: ${({ $active }) => ($active ? '#ffc107' : '#c0c0c0')};
  cursor: pointer;
  margin-right: 5px;
  transition: all 0.2s;
  -webkit-tap-highlight-color: transparent;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
`

export const HiddenInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`

export const Counter = styled.span`
  margin-left: 5px;
  font-weight: 500;
  font-size: 19px;
  line-height: 20px;
`
