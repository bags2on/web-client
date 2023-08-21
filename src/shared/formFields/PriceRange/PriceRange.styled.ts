import styled from 'styled-components'
import Button from '@/shared/Button'
import RcSlider from 'rc-slider'

export const Container = styled.div`
  width: 100%;
  padding: 20px 15px 35px 13px;
`

export const SliderWrapper = styled.div`
  padding-left: 6px;
`

export const Slider = styled(RcSlider)`
  & .rc-slider-track {
    background-color: ${({ theme }) => (theme.type === 'light' ? '#ff9900' : theme.colors.primary)};
  }

  & .rc-slider-handle {
    border-color: ${({ theme }) => (theme.type === 'light' ? '#ff9900' : theme.colors.primary)};
    background-color: ${({ theme }) => (theme.type === 'light' ? '#fff' : theme.colors.primary)};
  }

  & .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
    border-color: #ff9900;
    box-shadow: 0 0 0 5px #ff9900;
  }

  & .rc-slider-handle:active {
    box-shadow: 0 0 5px #ff9900;
  }
`

export const SliderMark = styled.span`
  color: ${({ theme }) => (theme.type === 'light' ? '#343434' : '#fff')};
  font-weight: 500;
`

export const Controls = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const PriceInput = styled.input`
  -moz-appearance: textfield;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-right: 10px;
  padding: 8px 6px;
  font-weight: 400;
  border-radius: 6px;
  transition: all 0.3s;
  border: 1px solid;
  color: ${({ theme }) => (theme.type === 'light' ? '#343434' : '#fff')};
  background-color: ${({ theme }) => (theme.type === 'light' ? '#fff' : '#3c4144')};
  border-color: ${({ theme }) => (theme.type === 'light' ? '#c4c4c4' : '#3c4144')};

  &:hover {
    border-color: #dcdcdc;
  }
  &:focus {
    outline: none;
    border-color: #ff9900;
  }
`
export const SetButton = styled(Button)`
  max-height: 34px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 6px;
  text-transform: uppercase;
  color: ${({ theme }) => (theme.type === 'light' ? '#343434' : '#fff')};
  background-color: ${({ theme }) => (theme.type === 'light' ? '#fff' : '#3c4144')};
  border: 1px solid;
  border-color: ${({ theme }) => (theme.type === 'light' ? '#c4c4c4' : '#3c4144')};
  &:hover {
    color: #fff;
    background-color: var(--green-light);
    border-color: var(--green-light);
  }
`
