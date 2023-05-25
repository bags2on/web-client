import styled from 'styled-components'
import Button from '../../../shared/Button/Button'
import SvgIcon from '../../../shared/SvgIcon'

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
    fill: gray;
  }
  & > p {
    margin: 0;
    font-size: 20px;
    font-weight: 500px;
    text-align: center;
  }
`

export const BackButton = styled(Button)`
  max-width: 130px;
  margin-top: 50px;
`

export const ExpandIcon = styled(SvgIcon)`
  font-size: 20px;
  transform: rotate(-90deg);
`
