import styled from 'styled-components'
import Button from '@/shared/Button'
import SvgIcon from '@/shared/SvgIcon'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Content = styled.div`
  padding: 0 15px;
  & > svg {
    width: 100%;
    height: auto;
    fill: ${({ theme }) => (theme.type === 'light' ? '#aeaeae' : '#fafafa')};
  }
  & > p {
    margin: 0;
    font-weight: 500;
    font-size: 20px;
    font-weight: 500px;
    text-align: center;
  }
`

export const BackButton = styled(Button)`
  max-width: 70%;
  margin-top: 50px;
  background-color: #232323;
  color: #fff;
  border: none;
  font-size: 16px;
  border-radius: 14px;
  font-weight: 600;
`

export const ExpandIcon = styled(SvgIcon)`
  font-size: 20px;
  transform: rotate(-90deg);
  font-size: 23px;
  fill: #fff;
  margin-right: 10px;
`
