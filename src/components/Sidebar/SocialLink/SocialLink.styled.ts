import SvgIcon from '@/shared/SvgIcon'
import styled from 'styled-components'

export const Container = styled.a`
  display: block;
  position: relative;
  color: #fff;
  font-weight: 500;
  background-color: rgb(34, 158, 217);
  margin: 0 auto;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 10px;
  -webkit-tap-highlight-color: transparent;
`

export const IconBox = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 50%;
`

export const TheTelegramIcon = styled(SvgIcon)`
  fill: rgb(34, 158, 217);
  font-size: 22px;
  top: 0;
  transition: all 0.3s;
  transform: translateX(-10%);
`

export const Title = styled.p`
  font-size: 20px;
  margin: 0;
  & b {
    font-weight: 600;
  }
`
