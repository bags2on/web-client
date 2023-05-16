import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  padding: 60px 0 25px 20px;
  border-bottom: 1px #aeaeae solid;
`

export const LogoWrapper = styled.div`
  width: 190px;
  background-color: ${({ theme }) => (theme.type === 'light' ? 'transparent' : theme.colors.primary)};
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
