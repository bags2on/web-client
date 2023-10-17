import styled from 'styled-components'

export const Container = styled.section`
  padding: 10px;
  @media ${({ theme }) => theme.media.lg} {
    max-width: 450px;
    padding: 0;
  }
`

export const Wrapper = styled.div`
  background-color: ${({ theme }) => (theme.type === 'light' ? '#fff' : '#323232')};
  border-radius: 14px;
  padding: 7px 10px 15px 10px;
  @media ${({ theme }) => theme.media.lg} {
    padding: 20px 30px 20px 30px;
  }
`
