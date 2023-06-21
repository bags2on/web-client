import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  padding: 70px 0 30px 20px;
  background-color: #1e1e1e;
  border-bottom: 1px #aeaeae solid;
  @media ${({ theme }) => theme.media.lg} {
    padding-top: 60px;
  }
`

export const LogoWrapper = styled.div`
  width: 190px;
  & > img {
    width: 100%;
    height: 100%;
  }
`

export const ThemeWrapper = styled.div`
  position: absolute;
  padding: 0;
  top: 15px;
  right: 18px;
`
