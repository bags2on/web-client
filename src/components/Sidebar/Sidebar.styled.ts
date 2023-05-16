import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => (theme.type === 'light' ? '#000' : '#fff')};
  @media ${({ theme }) => theme.media.md} {
    width: 350px;
  }
`

export const LanguageBox = styled.div`
  display: flex;
  align-items: center;
  & > span {
    font-weight: 500;
    font-size: 18px;
    margin-left: 10px;
  }
`
