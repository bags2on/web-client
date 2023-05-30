import styled from 'styled-components'
import Button from '@/shared/Button'

export const Aside = styled.aside`
  padding: 10px 10px 20px 10px;
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0 15px 10px;
`

export const Title = styled.p`
  margin: 0;
  line-height: 22px;
  font-size: 21px;
  text-align: center;
  position: relative;
  font-weight: 500px;
  @media ${({ theme }) => theme.media.lg} {
    text-align: start;
  }
`

export const Divider = styled.hr`
  margin: 0;
  border: none;
  height: 2px;
  margin-bottom: 10px;
  background-color: #d8bbbb80;
`

export const ClearButton = styled(Button)`
  font-size: 11px;
  padding: 3px;
  background-color: #f44336;
  &:hover {
    background-color: #ff5346;
  }
`

export const RadioWrapper = styled.div`
  padding: 8px 10px;
`
