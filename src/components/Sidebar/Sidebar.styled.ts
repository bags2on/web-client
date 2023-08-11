import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => (theme.type === 'light' ? '#000' : '#fff')};
  width: 75vw;
  max-width: 350px;
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

export const SocialBox = styled.div`
  padding: 10px 15px;
  padding-top: 30px;
`
